# IoT-Based Smart Electricity Energy Meter

## 📌 Project Description
This project is an IoT-based Smart Electricity Energy Meter using the ESP32 and the newly updated Blynk 2.0 application. It uses the **SCT-013 Current Sensor** and **ZMPT101B Voltage Sensor** to measure voltage, current, power, and total energy consumed (in kWh). 

The measured values are sent to the Blynk 2.0 application, where they are displayed on a dashboard accessible from anywhere. To ensure data continuity, energy meter readings are stored in the ESP32’s EEPROM memory, preventing loss in case of power outages.

## 🔧 Components Used
- **ESP32 Development Board**
- **SCT-013 Current Sensor**
- **ZMPT101B Voltage Sensor**
- **Blynk 2.0 Application**
- **Jumper Wires & Breadboard**
- **Load (e.g., Bulb, Fan, etc.)**

## 📡 Features
✅ Measures **Voltage, Current, Power, and Energy Consumption**  
✅ Sends real-time data to **Blynk 2.0 Dashboard**  
✅ Stores energy data in **EEPROM** to prevent data loss  
✅ **Remote Monitoring** of electricity usage via smartphone  
✅ Helps in **Power Optimization & Energy Management**  

## 📜 How to Use
1. **Set up Blynk 2.0** and create a new project. Obtain the **Auth Token**.
2. **Connect the Hardware** as per the circuit diagram.
3. **Flash the ESP32** with the provided source code.
4. **Enter WiFi credentials and Blynk Auth Token** in the code.
5. **Upload the code to ESP32** using Arduino IDE.
6. **Monitor the live readings** on the Blynk 2.0 Dashboard.

## 🛠 Circuit Diagram
![Uploading image.png…]()


## 📝 Source Code
The complete source code for this project can be found in this repository under `main.ino`.

## 📷 Screenshots
*(Attach or link to Blynk dashboard screenshots here)*

## 📌 License
This project is open-source and available for educational and personal use. Feel free to modify and enhance it!

## 🔗 Connect
If you found this project helpful, consider giving a ⭐ to this repository!
