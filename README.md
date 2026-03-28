# Tensor-Flow-Flow: Multi-Layered Behavioral Intelligence 🧠🛡️

This project explores the intersection of **Deep Learning** and **Autonomous Workflows**, developed as part of my **Postgraduate studies in Applied AI Software Engineering**. 

The repository demonstrates a Neural Network (NN) built with **TensorFlow.js** that classifies user behavior patterns, designed to be the "cognitive core" of a broader security architecture.

---

## 🏗️ Architectural Concept: The Hybrid Defense Model

This project proposes a synergy between two distinct AI paradigms experienced through my academic journey at **PUC-Rio** and my current **Applied AI Specialization**:

### 1. The Watchman (Classic ML - SVM)
* **Origin:** Studied at PUC-Rio.
* **Role:** Real-time telemetry monitoring (temperature, CPU spikes, unauthorized physical access).
* **Characteristic:** High efficiency in linear pattern separation. It acts as the "Trigger" for the system.

### 2. The Specialist (Deep Learning - TensorFlow)
* **Origin:** Postgraduate specialization.
* **Role:** Complex cognitive analysis (Audio/Voice recognition, FaceID tracking).
* **Characteristic:** Non-linear pattern recognition. It confirms the threat detected by the SVM.

### 3. The Orchestrator (Autonomous Agent)
* **Role:** Workflow execution. 
* **Action:** If SVM detects an anomaly and TensorFlow confirms an unauthorized presence, the Agent autonomously maps the intruder's path and notifies security.

---

## 🚀 Use Case: Critical Data Center Security

Imagine a high-security Server Room:
1.  **Detection:** An **SVM** identifies a door opening at 3 AM alongside a sudden local temperature drop.
2.  **Identification:** A **TensorFlow** model (similar to the code in this repo) processes the room's audio feed and identifies a "Non-Authorized Voice" pattern.
3.  **Mitigation:** The AI Agent scans Sector FaceID logs, identifies the suspect's last known location, and triggers a lockdown while emailing the security team.

---

## 💻 Technical Implementation

### Neural Network Architecture
* **Input Layer:** 7-dimensional normalized vector (Age, Preferences, Location).
* **Hidden Layer:** 80 Dense Neurons with **ReLU** activation for complex feature extraction.
* **Output Layer:** 3 Categories (Premium, Medium, Basic) using **Softmax** for probabilistic distribution.
* **Optimization:** **Adam** optimizer with **Categorical Cross-Entropy** to minimize the loss function during training.

### Environment & Reproducibility (Docker)
To avoid Windows-Linux compatibility issues with native C++ bindings (`tfjs-node`), this project is fully containerized.

**Build the Image:**
```bash
docker build -t tensor-flow-flow .

Run with Hot-Reload (Development Mode):

Bash
docker run -it --rm -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules tensor-flow-flow
Note: Using nodemon -L inside the container ensures that saving files in Windows triggers an immediate re-train in the Linux environment.

📈 Learning Cascade
During training, the model's Loss decreases as it optimizes its internal weights. This "habit of excellence" (as Aristotle would put it) is achieved through a shuffle: true configuration, preventing the model from "hallucinating" patterns based on data order rather than actual features.

Author: [Your Name]

Academic Context: PUC-Rio (Software Engineering) | Postgraduate in Applied AI.


---

🚀 Final Sync (The International Way)
Here are the commands to update your repository with the finalized English documentation:

git add README.md

git commit -m "docs: finalized readme in full english for international portfolio"

git push