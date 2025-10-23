
## Testing Strategy

To keep the project stable, contributor-friendly, and not bloated with useless tests, we follow purposeful and minimalistic testing.
1. Pure functions / utilities
```ts
// csv.ts
export function parseCsv(csv: string): Card[] { ... }
```

```ts
// csv.test.ts
test('parses CSV correctly', () => {
  const cards = parseCsv("front;back\\nHi;Привіт");
  expect(cards).toHaveLength(1);
  expect(cards[0].front).toBe("Hi");
});
```

2. Hooks and stores
```ts
// useDeckStore.ts
export const useDeckStore = create(...)
```
```ts
test('initial state has empty deck list', () => {
  const store = useDeckStore.getState();
  expect(store.decks).toEqual([]);
});
```

3. Feature logic / interaction
```ts
// features/import-deck/ui/ImportButton.tsx
<button onClick={handleImport}>Import CSV</button>
```
```ts
test('imports cards from CSV and updates store', async () => {
  render(<ImportButton />);
  fireEvent.click(screen.getByText('Import CSV'));
  await waitFor(() => {
    expect(store.cards.length).toBeGreaterThan(0);
  });
});
```

4. UI with logic
```ts
export const CardRow = ({ card }: { card: Card }) => (
  <div>
    <span>{card.title}</span>
    {card.type === 'video' && <VideoPreview src={card.mediaUrl} />}
  </div>
);
```

```ts
test('renders name', () => {
  const { getByText, getByRole } = render(<CardRow card={{title: "Hello"}} />)
  expect.element(getByText('Hello')).toBeInTheDocument();
})
```

### Where Tests Live
Co-located next to implementation
```
shared/
  lib/
    parseCsv.ts
    parseCsv.test.ts
features/
  export-deck/
    lib/
      exportToCsv.ts
      exportToCsv.test.ts
```
