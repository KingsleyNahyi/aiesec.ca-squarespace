from PIL import Image
import os

# Path to your static images folder
INPUT_FOLDER = "static/images"
OUTPUT_FOLDER = "static/images/compressed"
QUALITY = 80

# Create output folder if it doesn't exist
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

supported = (".jpg", ".jpeg", ".png", ".webp")
converted = 0
skipped = 0

for filename in os.listdir(INPUT_FOLDER):
    if not filename.lower().endswith(supported):
        skipped += 1
        continue

    input_path = os.path.join(INPUT_FOLDER, filename)
    
    # Skip if it's a directory
    if os.path.isdir(input_path):
        continue

    # Output filename with .webp extension
    base_name = os.path.splitext(filename)[0]
    output_path = os.path.join(OUTPUT_FOLDER, base_name + ".webp")

    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if needed (WebP supports both but this avoids issues)
            if img.mode in ("RGBA", "LA"):
                img.save(output_path, "WEBP", quality=QUALITY, lossless=False)
            else:
                img = img.convert("RGB")
                img.save(output_path, "WEBP", quality=QUALITY, lossless=False)
        
        original_size = os.path.getsize(input_path) / 1024
        compressed_size = os.path.getsize(output_path) / 1024
        saving = ((original_size - compressed_size) / original_size) * 100

        print(f"✅ {filename} → {base_name}.webp | {original_size:.1f}KB → {compressed_size:.1f}KB ({saving:.0f}% smaller)")
        converted += 1

    except Exception as e:
        print(f"❌ Failed: {filename} — {e}")
        skipped += 1

print(f"\nDone! {converted} images compressed, {skipped} skipped.")
print(f"Compressed images saved to: {OUTPUT_FOLDER}")
