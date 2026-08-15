from PIL import Image
import os

img_path = 'public/favicon.png'
if not os.path.exists(img_path):
    print("Error: favicon.png not found")
    exit(1)

img = Image.open(img_path)
img = img.convert("RGBA")

data = img.getdata()
new_data = []

for item in data:
    # item is (R, G, B, A)
    # Set the color to white while preserving the original alpha transparency
    new_data.append((255, 255, 255, item[3]))

img.putdata(new_data)
img.save('public/favicon-dark.png')
print("Successfully created public/favicon-dark.png")
