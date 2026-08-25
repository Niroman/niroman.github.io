# Professional Portfolio Website

A modern, responsive personal website showcasing your professional profile, skills, experience, and projects.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Smooth animations and transitions
- 📧 Contact form
- 🔗 Social media integration
- 📄 Resume download
- 🎯 Project showcase
- 🏆 Certificates display

## Structure

```
Bio_Design/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Your images folder
├── resume/             # Resume PDF folder
├── certificates/       # Certificates folder
└── README.md          # This file
```

## How to Customize

### 1. Add Your Profile Image
- Add your professional photo to the `images/` folder
- Replace the `.image-placeholder` div in `index.html` with:
  ```html
  <img src="images/your-photo.jpg" alt="Your Name">
  ```

### 2. Update Experience Section
- Edit the timeline items in the Experience section
- Add multiple `.timeline-item` blocks for each role

### 3. Add Projects
- Update the project cards with your actual projects
- Add GitHub links or project URLs
- Add project images if desired

### 4. Add Certificates
- Place certificate PDFs or images in the `certificates/` folder
- Update the certificate cards with your actual certifications
- Link to certificate verification pages

### 5. Update Contact Information
- Replace `your.email@example.com` with your actual email
- Update all social media links

### 6. Add Resume
- Place your resume PDF in the `resume/` folder
- Make sure it's named `Niroman_Resume_0818.pdf` or update the links

## Deploying to GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io`

## Local Development

Simply open `index.html` in your web browser to preview locally.

For a better development experience with live reload:
```bash
# Using Python
python -m http.server 8000

# Then visit http://localhost:8000
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Inter)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.
