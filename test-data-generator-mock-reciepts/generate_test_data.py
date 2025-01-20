import os
from PIL import Image, ImageDraw, ImageFont
import random
from datetime import datetime, timedelta
import json

class TestDataGenerator:
    def __init__(self):
        self.merchants = {
            'office_supplies': [
                'Office Depot', 'Staples', 'Paper Plus', 
                'Office World', 'Supply Hub'
            ],
            'travel': [
                'Delta Airlines', 'Marriott Hotel', 'Enterprise Rent-A-Car',
                'Hilton Hotels', 'American Airlines'
            ],
            'meals': [
                'Subway', 'Panera Bread', 'Chipotle',
                'Local Café', 'Business Lunch Co'
            ],
            'utilities': [
                'AT&T', 'Verizon', 'Electric Company',
                'Water Corp', 'Internet Provider'
            ],
            'equipment': [
                'Best Buy', 'Apple Store', 'Dell',
                'Micro Center', 'Tech Supplies'
            ]
        }
        
        self.items = {
            'office_supplies': [
                ('Printer Paper', 10.99, 45.99),
                ('Ink Cartridge', 25.99, 89.99),
                ('Sticky Notes', 2.99, 12.99),
                ('Pens Pack', 4.99, 15.99),
                ('File Folders', 8.99, 24.99)
            ],
            'travel': [
                ('Flight Ticket', 199.99, 999.99),
                ('Hotel Room', 129.99, 399.99),
                ('Car Rental', 45.99, 129.99),
                ('Taxi Fare', 15.99, 75.99),
                ('Airport Parking', 12.99, 45.99)
            ],
            'meals': [
                ('Business Lunch', 15.99, 45.99),
                ('Coffee Meeting', 5.99, 15.99),
                ('Team Dinner', 89.99, 299.99),
                ('Client Meal', 45.99, 149.99),
                ('Catering', 149.99, 499.99)
            ],
            'utilities': [
                ('Phone Bill', 45.99, 149.99),
                ('Internet', 59.99, 199.99),
                ('Electricity', 89.99, 299.99),
                ('Water', 29.99, 99.99),
                ('Gas', 39.99, 149.99)
            ],
            'equipment': [
                ('Laptop', 699.99, 1999.99),
                ('Monitor', 199.99, 599.99),
                ('Printer', 149.99, 499.99),
                ('Scanner', 99.99, 299.99),
                ('Software License', 49.99, 199.99)
            ]
        }

    def generate_receipt_data(self, category):
        """Generate random receipt data for a given category"""
        merchant = random.choice(self.merchants[category])
        date = datetime.now() - timedelta(days=random.randint(1, 365))
        
        # Generate 1-3 items for the receipt
        num_items = random.randint(1, 3)
        items = []
        total = 0
        
        for _ in range(num_items):
            item_name, min_price, max_price = random.choice(self.items[category])
            quantity = random.randint(1, 3)
            price = round(random.uniform(min_price, max_price), 2)
            item_total = round(price * quantity, 2)
            total += item_total
            
            items.append({
                'name': item_name,
                'quantity': quantity,
                'price': price,
                'total': item_total
            })
        
        # Add tax
        tax = round(total * 0.08, 2)
        final_total = round(total + tax, 2)
        
        return {
            'merchant': merchant,
            'date': date.strftime('%Y-%m-%d %H:%M:%S'),
            'items': items,
            'subtotal': total,
            'tax': tax,
            'total': final_total,
            'category': category
        }

    def create_receipt_image(self, receipt_data, output_path):
        """Create a receipt image from receipt data"""
        # Create new image with white background
        width = 400
        height = 600
        image = Image.new('RGB', (width, height), 'white')
        draw = ImageDraw.Draw(image)
        
        # Try to use a monospace font, fall back to default if not available
        try:
            font = ImageFont.truetype('Courier', 16)
        except:
            font = ImageFont.load_default()
        
        # Draw receipt content
        y = 20
        
        # Header
        draw.text((20, y), receipt_data['merchant'], fill='black', font=font)
        y += 30
        draw.text((20, y), f"Date: {receipt_data['date']}", fill='black', font=font)
        y += 40
        
        # Items
        draw.text((20, y), "Items:", fill='black', font=font)
        y += 30
        
        for item in receipt_data['items']:
            item_text = f"{item['name']} x{item['quantity']}"
            draw.text((20, y), item_text, fill='black', font=font)
            price_text = f"${item['total']:.2f}"
            draw.text((width - 100, y), price_text, fill='black', font=font)
            y += 20
        
        y += 20
        
        # Totals
        draw.text((20, y), "Subtotal:", fill='black', font=font)
        draw.text((width - 100, y), f"${receipt_data['subtotal']:.2f}", fill='black', font=font)
        y += 20
        
        draw.text((20, y), "Tax:", fill='black', font=font)
        draw.text((width - 100, y), f"${receipt_data['tax']:.2f}", fill='black', font=font)
        y += 20
        
        draw.text((20, y), "Total:", fill='black', font=font)
        draw.text((width - 100, y), f"${receipt_data['total']:.2f}", fill='black', font=font)
        
        # Save image
        image.save(output_path)

def generate_test_dataset(num_receipts=10, output_dir='test_data'):
    """Generate a complete test dataset"""
    generator = TestDataGenerator()
    
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(os.path.join(output_dir, 'images'), exist_ok=True)
    
    receipts = []
    categories = list(generator.merchants.keys())
    
    for i in range(num_receipts):
        # Generate receipt data
        category = random.choice(categories)
        receipt_data = generator.generate_receipt_data(category)
        
        # Generate receipt image
        image_path = os.path.join(output_dir, 'images', f'receipt_{i+1}.png')
        generator.create_receipt_image(receipt_data, image_path)
        
        # Store receipt data
        receipt_data['image_path'] = image_path
        receipts.append(receipt_data)
    
    # Save receipt data to JSON
    with open(os.path.join(output_dir, 'receipt_data.json'), 'w') as f:
        json.dump(receipts, f, indent=2)
    
    return receipts

# Generate test data
if __name__ == "__main__":
    receipts = generate_test_dataset(20)
    print(f"Generated {len(receipts)} test receipts")