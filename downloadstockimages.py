import requests
import os
import time

# Directory to save images (public/ folder in your Next.js project)
SAVE_DIR = 'public/'
if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)

# List of 70s-style stock images with URLs and filenames
IMAGES = [
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-1.jpg',
        'description': 'Abstract 70s pattern with earthy tones'
    },
    {
        'url': 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd',
        'filename': 'retro-pattern-2.jpg',
        'description': 'Retro geometric pattern in orange and brown'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-3.jpg',
        'description': 'Vintage 70s wallpaper with floral design'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-4.jpg',
        'description': '70s abstract art with bold colors'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-5.jpg',
        'description': 'Retro stripes in mustard yellow and brown'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-6.jpg',
        'description': '70s psychedelic pattern with vibrant colors'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-7.jpg',
        'description': 'Vintage 70s textile design with earthy tones'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-8.jpg',
        'description': 'Retro polka dots in 70s colors'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-9.jpg',
        'description': '70s abstract shapes in orange and green'
    },
    {
        'url': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        'filename': 'retro-pattern-10.jpg',
        'description': 'Vintage 70s design with retro typography'
    },
]

def download_image(url, filename):
    """Download an image from a URL and save it to the specified filename."""
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        with open(filename, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    f.write(chunk)
        print(f"Downloaded: {filename}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

def main():
    image_count = 0
    for image in IMAGES:
        # Construct the full path for the file
        filename = os.path.join(SAVE_DIR, image['filename'])
        # Download the image
        download_image(image['url'], filename)
        image_count += 1
        # Add a small delay to be respectful of the server
        time.sleep(1)
    
    print(f"Total images downloaded: {image_count}")

if __name__ == '__main__':
    main()