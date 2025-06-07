# Casa Bonita Website - Deployment Instructions

## Quick Start Guide

Your Casa Bonita cannabis consulting website is now complete and ready to use! Here's everything you need to know:

## What You Have

Your website consists of three main files:
- `index.html` - The main website file
- `styles.css` - All the styling and colors
- `script.js` - Interactive features and form handling

## How to Use Your Website

### Option 1: Simple File Hosting (Recommended for beginners)

1. **Upload to any web hosting service:**
   - Upload all three files (`index.html`, `styles.css`, `script.js`) to your web hosting provider
   - Make sure `index.html` is in the root directory
   - Your website will be live immediately

2. **Popular hosting options:**
   - **Netlify** (free): Drag and drop the folder to netlify.com
   - **GitHub Pages** (free): Upload to a GitHub repository
   - **Traditional web hosting**: Upload via FTP to your hosting provider

### Option 2: Test Locally First

1. **Open the website on your computer:**
   - Navigate to the folder containing your website files
   - Double-click on `index.html`
   - Your website will open in your web browser
   - Test all features before uploading to hosting

## Website Features

### Navigation
- Fixed navigation bar that stays at the top when scrolling
- Smooth scrolling to different sections when clicking menu items
- Mobile-responsive navigation that adapts to smaller screens

### Contact Form
- Collects all necessary information from potential clients
- Includes validation to ensure all fields are filled
- Automatically opens email client with pre-filled message when submitted
- Form data includes: name, location, experience level, growing space, goals, and contact preference

### Responsive Design
- Automatically adapts to desktop, tablet, and mobile screens
- Touch-friendly buttons and form elements on mobile devices
- Optimized typography and spacing for all screen sizes

### Performance
- Fast loading with no heavy images or animations
- Clean, semantic code for good search engine optimization
- Minimal JavaScript for maximum compatibility

## Customization Guide

### Changing Colors
Edit the `:root` section in `styles.css` to modify the color palette:
```css
:root {
    --primary-green: #6B7A3F;    /* Main brand color */
    --forest-green: #4A5D23;     /* Darker green */
    --warm-cream: #F5F3E9;       /* Background color */
    --earth-brown: #8B6F47;      /* Accent color */
    --sage-green: #9CAF88;       /* Light green */
}
```

### Updating Content
- **Contact Information**: Edit the email address in both `index.html` and `script.js`
- **Pricing**: Update prices in the pricing section of `index.html`
- **Services**: Modify service descriptions in the services section
- **Testimonials**: Replace with real customer testimonials

### Adding Your Logo
Replace the text logo in the navigation with an image:
1. Add your logo image file to the website folder
2. Replace the `<h1>Casa Bonita</h1>` in the navigation with:
   ```html
   <img src="your-logo.png" alt="Casa Bonita" style="height: 40px;">
   ```

## SEO Optimization

### Meta Tags
The website includes basic SEO meta tags. You can enhance them by:
- Adding more specific keywords in the meta description
- Including Open Graph tags for social media sharing
- Adding structured data for local business information

### Google Analytics
To track website visitors, add Google Analytics:
1. Create a Google Analytics account
2. Add the tracking code before the closing `</head>` tag in `index.html`

## Legal Considerations

### Compliance
- The website includes a disclaimer: "Grow responsibly. Know your local laws."
- Ensure all content complies with Greek cannabis regulations
- Consider adding a privacy policy and terms of service
- Update contact information to reflect your actual business details

### GDPR Compliance
For EU compliance, consider adding:
- Cookie consent banner
- Privacy policy link
- Data processing information in the contact form

## Maintenance

### Regular Updates
- Update pricing and service information as needed
- Replace placeholder testimonials with real customer feedback
- Keep contact information current
- Monitor form submissions and respond promptly

### Backup
- Keep backup copies of all website files
- Document any customizations you make
- Test changes on a staging site before updating the live version

## Technical Support

### Common Issues
- **Form not working**: Check that the email address in `script.js` matches your business email
- **Styling issues**: Ensure all three files are in the same folder
- **Mobile display problems**: Test on actual mobile devices, not just browser resize

### Browser Compatibility
The website targets **modern browsers** and is officially supported on:
- Chrome (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Edge (latest versions)
- Mobile browsers on iOS and Android

## Next Steps

1. **Test thoroughly**: Open the website and test all features
2. **Customize content**: Replace placeholder information with your actual business details
3. **Choose hosting**: Select a hosting provider and upload your files
4. **Set up domain**: Point your domain name to your hosting
5. **Launch**: Share your new website with potential clients!

Your Casa Bonita website is designed to convert visitors into clients while maintaining the professional, discreet image appropriate for your premium cannabis consulting service in Greece.

