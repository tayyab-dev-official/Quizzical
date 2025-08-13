# Contributing to Quizzical

Thank you for your interest in contributing to Quizzical! We welcome contributions from everyone.

## How to Contribute

### Reporting Bugs

1. **Check existing issues** first to avoid duplicates
2. **Use the bug report template** when creating a new issue
3. **Provide detailed information** including:
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

### Suggesting Enhancements

1. **Check existing feature requests** to avoid duplicates
2. **Clearly describe the feature** and its benefits
3. **Provide examples** of how the feature would work
4. **Consider the scope** - keep suggestions focused

### Code Contributions

#### Setting Up Development Environment

1. Fork the repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/quizzical.git
   cd quizzical
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

#### Making Changes

1. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Follow the coding standards**:
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Follow the existing code style
   - Run ESLint: `npm run lint`

3. **Test your changes**:
   - Test manually in the browser
   - Ensure no console errors
   - Test on different screen sizes

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

#### Pull Request Process

1. **Update documentation** if needed
2. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```
3. **Create a Pull Request** with:
   - Clear title and description
   - Link to related issues
   - Screenshots for UI changes

## Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Use arrow functions for inline functions
- Use meaningful component and variable names
- Keep components small and focused
- Use proper JSX formatting

### CSS

- Use meaningful class names
- Follow BEM methodology when applicable
- Keep styles organized and grouped
- Use CSS custom properties for reusable values

### Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when applicable

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Getting Help

- Check the [README](README.md) for setup instructions
- Look through [existing issues](../../issues)
- Ask questions in new issues with the "question" label

## Recognition

All contributors will be recognized in our README and release notes. Thank you for making Quizzical better!
