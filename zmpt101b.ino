// Basic Analog Read Example for ESP32/Arduino
// This program reads an analog value from pin A0 and prints it to the Serial Monitor.

void setup()
{
    // Initialize serial communication at 9600 baud rate
    Serial.begin(9600);

    // Small delay to stabilize Serial Monitor
    delay(1000);
}

void loop()
{
    // Read analog value from pin A0
    int sensorValue = analogRead(A0);

    // Print the value to the Serial Monitor
    Serial.print("Analog Value: ");
    Serial.println(sensorValue);

    // Wait for 100 milliseconds before next reading
    delay(100);
}
