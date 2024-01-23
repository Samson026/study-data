#include <WiFi.h>

#define sendBtn 38
#define changeBtn 13

const char* ssid = "SyentaTest";
const char* password = "Syenta3D!";

bool timing = false;
int mode = 0;
bool armed = true;
String types[3] {
  "speaking",
  "listening",
  "reading"
};

void setup() {
  Serial.begin(115200);

  pinMode(sendBtn, INPUT);
  pinMode(changeBtn, INPUT);

  attachInterrupt(digitalPinToInterrupt(sendBtn), toggleTiming, FALLING);
  // attachInterrupt(digitalPinToInterrupt(changeBtn), toggleMode, RISING);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.println("...");
  }

  Serial.print("WiFi connected with IP:");
  Serial.println(WiFi.localIP());
}


void loop() {
  // put your main code here, to run repeatedly:
  WiFiClient client;

  if (digitalRead(changeBtn)) {
    if (armed) {
      if (mode == 2) {
        mode = 0;
      }
      else {
        mode++;
      }

      Serial.println("Mode changed to: " + types[mode]);
      armed = false;
    }
  }
  else {
    armed = true;
  }

  if(timing) {
    Serial.println("Starting timer");

    int seconds = 0;
    while(timing) {
      delay(1000);
      seconds++;
      Serial.println(seconds);
    }

    if (!client.connect(IPAddress(10,20,20,220), 7654)) {
      Serial.println("Connection to host failed\n");
      delay(1000);
      return;
    }
    Serial.print("Time: ");
    Serial.println(seconds);
    client.print(types[mode]);
    client.print(" ")
    client.print(seconds);
    client.stop();
    delay(1000);
  }
}

void toggleTiming() {
  timing = !timing;
}

void toggleMode() {
  if (mode == 2) {
    mode = 0;
  }
  else {
    mode++;
  }
  Serial.println(mode);
  // Serial.print("changed to type " );
  // Serial.println(types[mode]);
}
