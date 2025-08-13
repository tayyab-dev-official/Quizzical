export const questions = {
  "test": {
    "title": "HTML/CSS Developer Mock Test",
    "duration": "40 minutes",
    "totalQuestions": 25,
    "sections": [
      {
        "id": 1,
        "title": "HTML Fundamentals",
        "questionCount": 5,
        "questions": [
          {
            "id": 1,
            "question": "Which HTML5 semantic element should be used for the main navigation menu?",
            "options": [
              "<div class=\"nav\">",
              "<navigation>",
              "<nav>",
              "<menu>"
            ],
            "correctAnswer": 2,
            "explanation": "<nav> is the correct semantic HTML5 element for navigation menus"
          },
          {
            "id": 2,
            "question": "What is the correct HTML structure for a form with email validation?",
            "options": [
              "<form><input type=\"email\" required></form>",
              "<form><input type=\"text\" email=\"true\"></form>",
              "<form><input type=\"email\" validate></form>",
              "<form><input type=\"text\" pattern=\"email\"></form>"
            ],
            "correctAnswer": 0,
            "explanation": "type=\"email\" with required attribute provides built-in email validation"
          },
          {
            "id": 3,
            "question": "Which attribute makes an HTML element accessible to screen readers?",
            "options": [
              "screen-reader",
              "aria-label",
              "accessibility",
              "reader-text"
            ],
            "correctAnswer": 1,
            "explanation": "aria-label provides accessible text descriptions for screen readers"
          },
          {
            "id": 4,
            "question": "What's the difference between <section> and <div>?",
            "options": [
              "No difference, they're identical",
              "<section> is semantic, <div> is not",
              "<div> is semantic, <section> is not",
              "<section> is for styling only"
            ],
            "correctAnswer": 1,
            "explanation": "<section> has semantic meaning, <div> is a generic container"
          },
          {
            "id": 5,
            "question": "Which meta tag is essential for responsive design?",
            "options": [
              "<meta name=\"responsive\" content=\"true\">",
              "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
              "<meta name=\"mobile\" content=\"responsive\">",
              "<meta name=\"screen\" content=\"mobile-first\">"
            ],
            "correctAnswer": 1,
            "explanation": "The viewport meta tag controls how the page is displayed on mobile devices"
          }
        ]
      },
      {
        "id": 2,
        "title": "CSS Fundamentals",
        "questionCount": 5,
        "questions": [
          {
            "id": 6,
            "question": "What is the CSS specificity score for '#header .nav a:hover'?",
            "options": ["0,0,1,3", "0,1,2,1", "0,1,1,2", "1,0,2,1"],
            "correctAnswer": 2,
            "explanation": "1 ID (#header), 1 class (.nav), 2 elements (a, :hover)"
          },
          {
            "id": 7,
            "question": "Which CSS property creates a flexible container?",
            "options": [
              "display: flex",
              "flex: container",
              "layout: flex",
              "container: flex"
            ],
            "correctAnswer": 0,
            "explanation": "display: flex creates a flex container"
          },
          {
            "id": 8,
            "question": "What does 'box-sizing: border-box' do?",
            "options": [
              "Adds borders to all elements",
              "Includes padding and border in element's total width/height",
              "Creates a border around the content box",
              "Removes default margins"
            ],
            "correctAnswer": 1,
            "explanation": "border-box includes padding and border in the element's dimensions"
          },
          {
            "id": 9,
            "question": "Which CSS Grid property defines the size of grid columns?",
            "options": [
              "grid-columns",
              "grid-template-columns",
              "column-template",
              "grid-column-size"
            ],
            "correctAnswer": 1,
            "explanation": "grid-template-columns defines the size and number of columns"
          },
          {
            "id": 10,
            "question": "What's the correct way to center a div horizontally and vertically using flexbox?",
            "code": ".container {\n  display: flex;\n  /* Which properties complete this? */\n}",
            "options": [
              "align-items: center; justify-content: center;",
              "vertical-align: middle; text-align: center;",
              "center: both;",
              "position: center;"
            ],
            "correctAnswer": 0,
            "explanation": "align-items centers on cross-axis, justify-content centers on main-axis"
          }
        ]
      },
      {
        "id": 3,
        "title": "Responsive Design",
        "questionCount": 5,
        "questions": [
          {
            "id": 11,
            "question": "What's the mobile-first approach in CSS?",
            "options": [
              "Design for desktop first, then mobile",
              "Write base styles for mobile, then add desktop styles with media queries",
              "Use only mobile-specific CSS properties",
              "Test only on mobile devices"
            ],
            "correctAnswer": 1,
            "explanation": "Mobile-first means starting with mobile styles and progressively enhancing for larger screens"
          },
          {
            "id": 12,
            "question": "Which media query targets tablets in portrait mode?",
            "options": [
              "@media (max-width: 768px)",
              "@media (min-width: 768px) and (max-width: 1024px)",
              "@media screen and (orientation: portrait)",
              "@media (device: tablet)"
            ],
            "correctAnswer": 1,
            "explanation": "This targets screen widths typically associated with tablets"
          },
          {
            "id": 13,
            "question": "What CSS unit is best for responsive typography?",
            "options": [
              "px (pixels)",
              "pt (points)",
              "rem or em",
              "% (percentage)"
            ],
            "correctAnswer": 2,
            "explanation": "rem and em units scale with font size, making typography responsive"
          },
          {
            "id": 14,
            "question": "Which CSS property makes images responsive?",
            "options": [
              "img { responsive: true; }",
              "img { max-width: 100%; height: auto; }",
              "img { width: responsive; }",
              "img { size: auto; }"
            ],
            "correctAnswer": 1,
            "explanation": "max-width: 100% and height: auto make images scale with their container"
          },
          {
            "id": 15,
            "question": "What's the purpose of CSS clamp()?",
            "options": [
              "To hide elements",
              "To create responsive values with min, preferred, and max",
              "To group CSS properties",
              "To validate CSS"
            ],
            "correctAnswer": 1,
            "explanation": "clamp() sets a value between a minimum and maximum, with a preferred value"
          }
        ]
      },
      {
        "id": 4,
        "title": "Modern CSS",
        "questionCount": 5,
        "questions": [
          {
            "id": 16,
            "question": "Which CSS feature allows custom properties (variables)?",
            "options": [
              "var(--property-name)",
              "css-var(property-name)",
              "$(property-name)",
              "custom(property-name)"
            ],
            "correctAnswer": 0,
            "explanation": "CSS custom properties are accessed using var(--property-name)"
          },
          {
            "id": 17,
            "question": "What does 'gap' property do in CSS Grid/Flexbox?",
            "options": [
              "Creates space between grid/flex items",
              "Defines the size of grid tracks",
              "Sets the container's width",
              "Aligns items to the center"
            ],
            "correctAnswer": 0,
            "explanation": "gap creates spacing between grid or flex items"
          },
          {
            "id": 18,
            "question": "Which CSS selector targets the first and last child?",
            "options": [
              ":first-child, :last-child",
              ":nth-child(1), :nth-child(-1)",
              ":first, :last",
              "Both a and b are correct"
            ],
            "correctAnswer": 3,
            "explanation": "Both :first-child/:last-child and :nth-child(1)/:nth-child(-1) work"
          },
          {
            "id": 19,
            "question": "What's the difference between 'grid-template-areas' and 'grid-area'?",
            "options": [
              "No difference",
              "grid-template-areas defines the layout, grid-area assigns elements to areas",
              "grid-area defines the layout, grid-template-areas assigns elements",
              "They're both deprecated"
            ],
            "correctAnswer": 1,
            "explanation": "grid-template-areas creates named areas, grid-area assigns elements to those areas"
          },
          {
            "id": 20,
            "question": "Which CSS property creates smooth transitions?",
            "options": ["animation", "transition", "transform", "smooth"],
            "correctAnswer": 1,
            "explanation": "transition property creates smooth changes between CSS property values"
          }
        ]
      },
      {
        "id": 5,
        "title": "Practical Code Questions",
        "questionCount": 5,
        "questions": [
          {
            "id": 21,
            "question": "Code Review: What's wrong with this CSS?",
            "code": ".button {\n  width: 200px;\n  height: 50px;\n  background-color: blue;\n  color: blue;\n  border: none;\n  cursor: pointer;\n}",
            "options": [
              "Missing hover state",
              "Color and background-color are the same (poor contrast)",
              "Width should be in percentages",
              "Missing font-family"
            ],
            "correctAnswer": 1,
            "explanation": "Blue text on blue background creates poor accessibility and readability"
          },
          {
            "id": 22,
            "question": "HTML Structure: Which is the most semantic way to mark up a blog post?",
            "options": [
              "<div class=\"post\"><div class=\"title\"><div class=\"content\">",
              "<article><h1><p>",
              "<section><header><main>",
              "<post><title><text>"
            ],
            "correctAnswer": 1,
            "explanation": "<article> is the semantic element for standalone content like blog posts"
          },
          {
            "id": 23,
            "question": "CSS Problem: How do you make a sticky header?",
            "options": [
              "position: sticky; top: 0;",
              "position: fixed; top: 0;",
              "position: absolute; top: 0;",
              "Both a and b work"
            ],
            "correctAnswer": 3,
            "explanation": "Both sticky and fixed positioning can create sticky headers with different behaviors"
          },
          {
            "id": 24,
            "question": "Accessibility: Which is the correct way to hide content visually but keep it for screen readers?",
            "code": ".sr-only {\n  /* Which properties? */\n}",
            "options": [
              "display: none;",
              "visibility: hidden;",
              "position: absolute; left: -9999px;",
              "opacity: 0;"
            ],
            "correctAnswer": 2,
            "explanation": "Moving content off-screen keeps it accessible to screen readers"
          },
          {
            "id": 25,
            "question": "Performance: Which CSS practice improves loading performance?",
            "options": [
              "Use inline styles",
              "Minimize and compress CSS files",
              "Use !important frequently",
              "Avoid CSS variables"
            ],
            "correctAnswer": 1,
            "explanation": "Minimizing and compressing CSS reduces file size and improves load times"
          }
        ]
      }
    ],
    "scoring": {
      "excellent": {
        "range": "23-25",
        "level": "Senior level"
      },
      "good": {
        "range": "20-22",
        "level": "Mid-level"
      },
      "fair": {
        "range": "17-19",
        "level": "Junior level"
      },
      "needsImprovement": {
        "range": "Below 17",
        "level": "Needs improvement"
      }
    },
    "tips": [
      "Read questions carefully - Look for keywords like 'semantic,' 'accessible,' 'responsive'",
      "Know CSS specificity - It's commonly tested",
      "Understand modern CSS - Grid, Flexbox, and CSS variables are essential",
      "Practice accessibility - ARIA attributes and semantic HTML are crucial",
      "Stay updated - Modern CSS features and best practices evolve quickly"
    ]
  }
}
