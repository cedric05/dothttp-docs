---
title: dothttp-runner 1.0.66 - Monaco Editor & Customizable Renderer
author: Prasanth
author_url: https://github.com/cedric05
tags: [dothttp-runner, vscode, monaco, notebook, settings]
description: Major upgrade with Monaco editor integration, customizable themes, and enhanced syntax highlighting
hide_table_of_contents: false
---

We're excited to announce dothttp-runner 1.0.66, our biggest release yet! This version brings professional-grade response rendering with VS Code's Monaco editor, fully customizable appearance settings, and a complete TextMate grammar rewrite.

<!-- truncate -->

## 🎯 What's New

### Monaco Editor Integration

We've replaced the basic syntax highlighter with **VS Code's Monaco Editor** for displaying HTTP responses in notebooks. This brings the full power of VS Code's editor to your API responses.

**Key Benefits:**
- 🎨 Superior syntax highlighting for JSON, XML, HTML, CSS, JavaScript, and more
- 🔍 Built-in find/replace (Cmd+F / Ctrl+F)
- 📏 Line numbers and code folding
- ✂️ Multi-cursor support and selection
- 🔄 Automatic code formatting
- 📐 Dynamic height - compact for small responses, scrollable for large ones

**Before and After:**

Previously, responses were displayed as plain formatted text with basic syntax colors. Now you get the full Monaco editor experience with rich highlighting, line numbers, and all the editing features you expect from VS Code.

### Customizable Renderer Settings

Take full control over how responses are displayed with 7 new configuration options:

```json
{
  "dothttp.conf.notebook.theme": "auto",
  "dothttp.conf.notebook.fontSize": 13,
  "dothttp.conf.notebook.fontFamily": "Menlo, Monaco, 'Courier New', monospace",
  "dothttp.conf.notebook.lineNumbers": "on",
  "dothttp.conf.notebook.minimap": false,
  "dothttp.conf.notebook.wordWrap": "off"
}
```

#### Theme Options

Choose from multiple Monaco themes or use automatic detection:

- **`auto`** (default) - Automatically matches your VS Code theme:
  - Detects light/dark mode
  - Detects high contrast themes
  - Updates in real-time when you change themes
- **`vs`** - Light theme (classic VS Code light)
- **`vs-dark`** - Dark theme (classic VS Code dark)
- **`hc-black`** - High contrast dark (accessibility)
- **`hc-light`** - High contrast light (accessibility)

**Example:**
```json
{
  "dothttp.conf.notebook.theme": "auto"
}
```

#### Font Customization

Personalize the appearance with your preferred font and size:

```json
{
  "dothttp.conf.notebook.fontSize": 13,
  "dothttp.conf.notebook.fontFamily": "Fira Code, JetBrains Mono, Menlo"
}
```

- **Font Size**: Range from 8 to 24 (default: 13)
- **Font Family**: Any monospace font installed on your system

Popular coding fonts work great:
- Fira Code (with ligatures)
- JetBrains Mono
- SF Mono
- Cascadia Code
- Consolas

#### Display Options

Fine-tune the editor appearance:

**Line Numbers:**
```json
{
  "dothttp.conf.notebook.lineNumbers": "on"
}
```
- `"on"` - Show line numbers (default)
- `"off"` - Hide line numbers for a cleaner look
- `"relative"` - Show relative line numbers (Vim-style)

**Minimap:**
```json
{
  "dothttp.conf.notebook.minimap": false
}
```
- `true` - Show code overview minimap on the right
- `false` - Hide minimap (default, saves space)

**Word Wrap:**
```json
{
  "dothttp.conf.notebook.wordWrap": "off"
}
```
- `"off"` - No wrapping (default, scroll horizontally)
- `"on"` - Wrap long lines
- `"wordWrapColumn"` - Wrap at editor width
- `"bounded"` - Wrap at minimum of viewport and wordWrapColumn

### Preset Configurations

Here are some recommended configurations for different use cases:

**Presentation Mode** (large text, clean interface):
```json
{
  "dothttp.conf.notebook.fontSize": 18,
  "dothttp.conf.notebook.lineNumbers": "off",
  "dothttp.conf.notebook.wordWrap": "on"
}
```

**Compact Mode** (small text with overview):
```json
{
  "dothttp.conf.notebook.fontSize": 11,
  "dothttp.conf.notebook.minimap": true
}
```

**Accessibility Mode** (high contrast, larger text):
```json
{
  "dothttp.conf.notebook.theme": "hc-black",
  "dothttp.conf.notebook.fontSize": 16
}
```

### Enhanced Syntax Highlighting

We completely rewrote the TextMate grammar (`dothttp.tmLanguage.json`) from scratch with proper conventions:

**New Grammar Features:**
- ✅ **Code folding** - Fold requests at `###`, `@name`, or HTTP methods
- ✅ **Better keyword highlighting** - All decorators, functions, methods properly colored
- ✅ **Structured patterns** - Request blocks, authentication, headers, queries
- ✅ **Embedded language support** - JSON bodies get JSON highlighting, Python scripts get Python highlighting
- ✅ **Smart indentation** - Auto-indent based on context

**Example:**
```http
### User API
@name("Get User")
GET https://api.example.com/users/{{userId}}
Authorization: Bearer {{token}}

{
  "status": "active"
}
```

All keywords (`GET`, `@name`, `Authorization`, etc.) are now properly highlighted with appropriate colors based on your theme.

### Performance Improvements

The single renderer architecture brings significant performance gains:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Rendering time | ~15ms | ~5ms | **67% faster** |
| Memory per output | ~300KB | ~100KB | **67% less** |
| Output items | 3-5 | 1 | **80% simpler** |

### Dynamic Height

Response displays now automatically adjust their height based on content:

- **Small responses** (1-5 lines): Compact display (~100-150px)
- **Medium responses** (10-20 lines): Comfortable reading (~200-400px)
- **Large responses** (30+ lines): Scrollable view (max 600px)

This eliminates wasted space and creates a better notebook flow.

## 🚀 How to Use

### Accessing Settings

1. Open VS Code Settings (Cmd+, or Ctrl+,)
2. Search for "dothttp notebook"
3. Adjust any of the 7 customization options

Changes take effect immediately - no need to reload!

### Theme Auto-Detection

The `auto` theme mode (default) automatically detects your VS Code theme:

```json
{
  "dothttp.conf.notebook.theme": "auto"
}
```

- Switches between light and dark automatically
- Detects high contrast themes for accessibility
- Updates in real-time when you change VS Code themes

### Example Workflow

1. Create or open an `.httpbook` file
2. Write your HTTP request:
   ```http
   GET https://jsonplaceholder.typicode.com/posts/1
   ```
3. Run the request
4. See the response displayed in Monaco editor with:
   - Line numbers
   - Formatted JSON
   - Syntax highlighting
   - Dynamic height

## 🔧 Technical Details

### Single Renderer Architecture

Previously, the extension generated multiple output items for different content types (JSON, XML, text), causing VS Code to sometimes pick the wrong renderer. 

**New approach:** We now use a single custom renderer (`x-application/dotbook`) that always displays responses in Monaco. This ensures:
- Consistent experience across all content types
- No renderer selection conflicts
- Simpler, cleaner codebase

### Pre-Formatting Strategy

Monaco editor doesn't include document formatters by default. Our solution: format content using native JavaScript (JSON.stringify, XML formatters, etc.) **before** passing it to Monaco. This gives you beautifully formatted responses without additional dependencies.

### Theme System Architecture

```
VS Code Settings
  ↓
Extension (notebookkernel.ts)
  ↓ postMessage
Renderer (index.tsx)
  ↓ updateMonacoSettings
Monaco Editor
  ↓ MutationObserver
Real-time updates
```

The extension watches for configuration changes and automatically updates the Monaco editor via messaging, enabling real-time theme and setting changes without reloading.

## 📚 Documentation

We've added comprehensive documentation in the repository:

- `MONACO_MIGRATION.md` - Migration details
- `RENDERER_THEME_SETTINGS.md` - Complete theme guide
- `GRAMMAR_IMPROVEMENTS.md` - Grammar rewrite details
- `DYNAMIC_HEIGHT.md` - Height calculation explanation
- `.vscode/settings.example.json` - Example configurations

## 🎯 Migration

**No action required!** All changes are backward compatible. The new Monaco renderer works out of the box with better defaults.

**Optional:** Customize settings to match your preferences (theme, font size, etc.)

## 🙏 Credits

Special thanks to the VS Code team for Monaco Editor and the TextMate specification that makes the enhanced grammar possible.

---

**Version:** 1.0.66  
**Release Date:** May 1, 2026  
**Download:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)
