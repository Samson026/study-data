import socket
import signal
import sys
from flask import Flask, render_template, request
import threading
import json

HOST = "0.0.0.0"
PORT = 7654
DATA_FILE = "test.txt"

skt = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
skt.bind((HOST, PORT))

skt.listen()

def signal_handler(signal, frame):
        # close the socket here
        skt.close()
        sys.exit(0)
signal.signal(signal.SIGINT, signal_handler)



def run_tcp():
    while True:
        conn, addr = skt.accept()

        with conn:
            print(f"connected to {addr}")

            while True:
                data = conn.recv(1024)
                if not data:
                    break
                with open(DATA_FILE, "a") as f:
                    f.write(data.decode())

thread = threading.Thread(target=run_tcp)
app = Flask(__name__)

thread.start()

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/api/get-data")
def get_data():

    with open(DATA_FILE, 'r') as f:
        lines  = f.readlines()

        resp = {'lines' : lines}

        return json.dumps(resp)
                
