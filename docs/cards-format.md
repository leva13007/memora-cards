# 📇 Card Format Guide

This document describes the format used for flashcards in Memora Cards.

## Overview

Cards can be created in multiple formats:
- **CSV** (Comma-separated or semicolon-separated)
- **Markdown** (coming soon)
- **JSON** (coming soon)

---

## CSV Format

### Basic Structure

The CSV format uses the following columns:

| Column | Required | Description |
|--------|----------|-------------|
| `front` | Yes | The question or prompt shown to the user |
| `back` | Yes | The answer or content revealed after answering |
| `type` | No | Card type: `text` (default), `audio`, `video` |
| `mediaUrl` | No | URL or path to media file (for audio/video cards) |
| `tags` | No | Comma-separated tags for categorization |

### Example

```csv
front;back;type;tags
Hello;Привіт;text;greetings, basic
Goodbye;До побачення;text;greetings
Introduction;https://example.com/intro.mp3;audio;conversation
```

### Delimiters

- **Semicolon (`;`)** is the default delimiter
- **Comma (`,`)** is also supported for CSV compatibility
- First row should contain headers

---

## Card Types

### Text Cards (`type: text` or default)

Simple text-based flashcards with a front and back side.

```
front: "What is React?"
back: "A JavaScript library for building user interfaces"
```

### Audio Cards (`type: audio`)

Cards that include an audio file. The `mediaUrl` should point to an audio file.

```
front: "Listen to this word"
back: "This is the translation"
mediaUrl: "https://example.com/audio.mp3"
type: "audio"
```

### Video Cards (`type: video`)

Cards that include a video. The `mediaUrl` should point to a video file.

```
front: "Watch this tutorial"
back: "Key concepts from the video"
mediaUrl: "https://example.com/video.mp4"
type: "video"
```

---

## Metadata

Additional metadata can be stored in separate fields:

- **Tags**: Used for filtering and organizing cards
- **Difficulty**: Optional difficulty level (planned)
- **Last reviewed**: Tracking for spaced repetition (planned)

---

## Examples

### Basic Text Card

```csv
front;back
Capital of France;Paris
Capital of Germany;Berlin
```

### Card with Tags

```csv
front;back;tags
Bonjour;Hello;french, greetings
Merci;Thank you;french, polite
```

### Audio Card

```csv
front;back;type;mediaUrl
Listen;French greeting;audio;./assets/bonjour.mp3
```

---

## Future Formats

- **Markdown format**: For richer text formatting
- **JSON format**: For programmatic card creation
- **Image cards**: Support for image-based flashcards
- **Cloze deletion**: Cards with fill-in-the-blank format

---

## Importing Cards

Cards can be imported from:
- Local CSV files
- Remote URLs (HTTP/HTTPS)
- GitHub repositories
- Local file system

See `docs/config-schema.md` for configuration options.