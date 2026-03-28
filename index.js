import tf from '@tensorflow/tfjs-node';

/**
 * Compiles and trains the Neural Network model
 * @param {tf.Tensor} inputXs - Training features
 * @param {tf.Tensor} outputYs - Training labels
 * @param {tf.Sequential} model - The TF model instance
 */
async function trainModel(inputXs, outputYs, model) {
    // Layer 1: Dense layer with 80 neurons and ReLU activation
    model.add(tf.layers.dense({ 
        inputShape: [7], 
        units: 80, 
        activation: 'relu' 
    }));

    // Layer 2: Output layer with 3 units (classes) and Softmax activation
    model.add(tf.layers.dense({ 
        units: 3, 
        activation: 'softmax' 
    }));

    model.compile({
        optimizer: 'adam',
        loss: 'categoricalCrossentropy',
        metrics: ['accuracy']
    });

    await model.fit(inputXs, outputYs, {
        verbose: 0,
        epochs: 100,
        shuffle: true
    });

    return model;
}

/**
 * Predicts the category of a given person
 * @param {Array} personTensor - Normalized input data
 * @param {tf.Sequential} model - The trained model
 */
async function predictCategory(personTensor, model) {
    const inputTensor = tf.tensor2d(personTensor);
    const prediction = model.predict(inputTensor);
    const predArray = await prediction.array();
    
    return predArray[0].map((value, index) => ({ value, index }));
}

// --- Dataset Setup ---

// Input Order: [Age_Normalized, Blue, Red, Green, SaoPaulo, Rio, Curitiba]
const normalizedPeopleData = [
    [0.33, 1, 0, 0, 1, 0, 0], // Erick
    [0.00, 0, 1, 0, 0, 1, 0], // Ana
    [1.00, 0, 0, 1, 0, 0, 1]  // Carlos
];

const labelNames = ["Premium", "Medium", "Basic"];
const targetLabels = [
    [1, 0, 0], // Premium
    [0, 1, 0], // Medium
    [0, 0, 1]  // Basic
];

// Data preparation for the Engine
const inputXs = tf.tensor2d(normalizedPeopleData);
const outputYs = tf.tensor2d(targetLabels);
const model = tf.sequential();

// --- Execution & Inference ---

(async () => {
    console.log("Training model, please wait...");
    await trainModel(inputXs, outputYs, model);
    console.log("Training completed.\n");

    const newPerson = {
        name: "Junior",
        data: [[0.66, 1, 0, 0, 1, 0, 0]] // Normalized data for Junior
    };

    const predictions = await predictCategory(newPerson.data, model);
    
    const formattedResult = predictions
        .sort((a, b) => b.value - a.value)
        .map(pred => `${labelNames[pred.index]}: ${(pred.value * 100).toFixed(2)}%`)
        .join('\n');

    console.log(`Prediction for ${newPerson.name}:`);
    console.log(formattedResult);
})();