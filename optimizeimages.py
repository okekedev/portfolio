import os
import sys
from PIL import Image

# Install PIL/Pillow if not already installed
# pip install Pillow

def optimize_images(public_folder):
    """Optimize all JPG images in the public folder, except hero-bg.jpg"""
    count = 0
    total_saved = 0
    
    for root, _, files in os.walk(public_folder):
        for file in files:
            if file.lower().endswith('.jpg') and file != 'hero-bg.jpg':
                file_path = os.path.join(root, file)
                
                try:
                    # Get original file size
                    original_size = os.path.getsize(file_path)
                    
                    # Open and optimize the image
                    img = Image.open(file_path)
                    
                    # Determine if resize is needed (for images larger than 800px wide)
                    if img.width > 800:
                        # Calculate new height to maintain aspect ratio
                        new_height = int(img.height * (800 / img.width))
                        img = img.resize((800, new_height), Image.LANCZOS)
                    
                    # Create a temporary path for the optimized image
                    temp_path = file_path + '.temp'
                    
                    # Save with 50% quality
                    img.save(temp_path, 'JPEG', quality=50, optimize=True)
                    
                    # Replace original with optimized version
                    os.replace(temp_path, file_path)
                    
                    # Calculate savings
                    new_size = os.path.getsize(file_path)
                    saved = original_size - new_size
                    saved_percent = (saved / original_size) * 100
                    
                    total_saved += saved
                    count += 1
                    
                    print(f"Optimized: {file_path}")
                    print(f"  Original: {original_size / 1024:.2f} KB")
                    print(f"  New size: {new_size / 1024:.2f} KB")
                    print(f"  Saved: {saved / 1024:.2f} KB ({saved_percent:.2f}%)")
                    
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
    
    print(f"\nOptimization complete!")
    print(f"Processed {count} images")
    print(f"Total space saved: {total_saved / (1024 * 1024):.2f} MB")

if __name__ == "__main__":
    # Get public folder path (use command line argument or default to './public')
    public_folder = sys.argv[1] if len(sys.argv) > 1 else './public'
    
    if not os.path.exists(public_folder):
        print(f"Error: The folder '{public_folder}' does not exist.")
        sys.exit(1)
    
    print(f"Optimizing JPG images in '{public_folder}' (except hero-bg.jpg)...")
    optimize_images(public_folder)