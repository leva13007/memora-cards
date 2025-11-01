# ⚙️ Configuration Schema

This document describes the configuration options available for Memora Cards.

## Overview

Memora Cards uses a JSON configuration file to customize the application behavior, deck sources, and user preferences.

---

## Configuration File Location

The configuration file should be placed in the project root as `deck.config.json` (or similar, depending on implementation).

---

## Schema

### Basic Structure

```json
{
  "decks": [
    {
      "name": "Default Deck",
      "source": "./public/cards.csv",
      "type": "csv"
    }
  ],
  "settings": {
    "theme": "light",
    "defaultVolume": 0.7
  }
}
```

### Deck Configuration

#### `decks` (array)

Array of deck configurations. Each deck object has:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Display name for the deck |
| `source` | string | Yes | URL or path to the card data |
| `type` | string | No | Source type: `csv` (default), `markdown`, `json` |
| `enabled` | boolean | No | Whether the deck is enabled (default: `true`) |

#### Source Types

- **`csv`**: CSV file (local or remote URL)
- **`markdown`**: Markdown format (planned)
- **`json`**: JSON format (planned)

### Settings Configuration

#### `settings` (object)

Application-wide settings:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `theme` | string | `"light"` | UI theme: `"light"` or `"dark"` |
| `defaultVolume` | number | `0.7` | Default volume for audio cards (0-1) |
| `autoPlay` | boolean | `false` | Auto-play audio/video cards |
| `studyMode` | string | `"spaced"` | Study mode: `"spaced"`, `"sequential"`, `"random"` |

---

## Examples

### Single Local Deck

```json
{
  "decks": [
    {
      "name": "French Vocabulary",
      "source": "./public/french.csv",
      "type": "csv"
    }
  ]
}
```

### Multiple Decks

```json
{
  "decks": [
    {
      "name": "French Basics",
      "source": "./public/french.csv",
      "type": "csv"
    },
    {
      "name": "Spanish Basics",
      "source": "https://example.com/spanish.csv",
      "type": "csv"
    },
    {
      "name": "German Advanced",
      "source": "./public/german.csv",
      "type": "csv",
      "enabled": false
    }
  ],
  "settings": {
    "theme": "dark",
    "defaultVolume": 0.8
  }
}
```

### Remote Deck

```json
{
  "decks": [
    {
      "name": "Community Deck",
      "source": "https://raw.githubusercontent.com/user/repo/main/cards.csv",
      "type": "csv"
    }
  ]
}
```

---

## Environment-Specific Configuration

### Development

Use local file paths for faster iteration:

```json
{
  "decks": [
    {
      "name": "Test Deck",
      "source": "./public/test-cards.csv"
    }
  ]
}
```

### Production

Use absolute URLs or relative paths suitable for deployment:

```json
{
  "decks": [
    {
      "name": "Production Deck",
      "source": "https://yourdomain.com/cards.csv"
    }
  ]
}
```

---

## Validation

The configuration file should:
- Be valid JSON
- Include at least one deck
- Have valid source paths/URLs
- Use supported type values

---

## Future Configuration Options

Planned additions:
- Custom card templates
- Progress tracking settings
- Export/import preferences
- Keyboard shortcuts configuration
- Accessibility settings