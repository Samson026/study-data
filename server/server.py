import socket
import signal
import sys

HOST = "0.0.0.0"
PORT = 7654
DATA_FILE = "test.txt"

skt = None

def signal_handler(signal, frame):
        # close the socket here
        skt.close()
        sys.exit(0)
signal.signal(signal.SIGINT, signal_handler)

skt = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
skt.bind((HOST, PORT))

skt.listen()

while True:
    conn, addr = skt.accept()

    with conn:
        print(f"connected to {addr}")

        while True:
            data = conn.recv(1024)
            if not data:
                break
            with open(DATA_FILE, "ab") as f:
                f.write(data)

                
