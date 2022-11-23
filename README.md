# react-manage-focus

[![npm version](https://badge.fury.io/js/@citizensadvice%2Freact-manage-focus.svg)](https://badge.fury.io/js/@citizensadvice%2Freact-manage-focus)

React hooks for automatically moving focus when elements are added or deleted.

## Motivation

A common design pattern is to have a list of items that can be added to or deleted.
The pattern will usually involve an add button to add new items, and a delete button
against individual items.

When operating this control with keyboard it is important that the keyboard focus
is correctly managed.

1. Adding an item should move the focus to a control within the added item. 
2. Deleting the item should move the focus from from the delete button to the nearest
   delete button for the remaining items, or the add button if no delete buttons remain.
   Failing to do this will cause the focus to move to the `<body>` which can issues with screen-readers.

When using React with a Redux style this level of focus management can be hard to achieve cleanly.

## Usage

The [test](/test) folder contains a sample "to-do list" application implementing this.

### `<FocusManager initialIds={Iterable<Object | string | number | symbol>}>`

This is a wrapper that holds the state for managing the focus.

This uses a context so any use of `useManageFocus` or `useFocusManager` must be within child elements.

The list of `initialIds` are the initial item ids for `useFirstRender` hook.

```js
import { FocusManager } from '@citizensadvice/focus-manager';

function App() {
  return (
    <FocusManager>
      <Items />
      <AddButton />
    </FocusManager>
  );
}
```

### `useManageFocus() : React.RefCallback<HTMLElement>`

This will return a callback ref that should be added to either the delete or add button.

If the element the ref is added to is removed, and the element has focus, the focus will move
to the nearest element that has a `useManageFocus` ref.

```js
import { useFocusManager } from '@citizensadvice/focus-manager';

function Item() {
  const deleteRef = useManageFocus();

  return (
    <fieldset>
      <legend>
        My item
      </legend>
      <button
        type="button"
        onClick={handleDelete}
        ref={deleteRef}
      >
        Delete
      </button>

      ...more stuff
    </fieldset>
  );
}
```

```js
function AddButton() {
  const deleteRef = useManageFocus();

  return (
    <button
      type="button"
      onClick={handleAdd}
      ref={deleteRef}
    >
      Add item
    </button>
  );
}
```

### `useNewRecord(id: Object | string | number | symbol) : boolean`

This will return true if the component should be considered a new record.

You can then use this to set the `autoFocus` attribute on a suitable element.

The `autoFocus` attribute will cause the element to be focused when first rendered.

```js
import { FocusManager } from '@citizensadvice/focus-manager';

function App() {
  // It is recommended initialIds is setup as a constant
  const [initialIds] = useState(() => [1]);
  return (
    <FocusManager initialIds={initialIds}>
      <Items />
    </FocusManager>
  );
}
```

```js
import { useNewRecord } from '@citizensadvice/focus-manager';

function Item() {
  const newRecord = useNewRecord(id);

  return (
    <fieldset>
      <legend>
        My item
      </legend>
      <label>
        My data
        <input
          autoFocus={newRecord}
          {...more}
        />
      </label>
    </fieldset>
  );
}
```

## Development

This is written in typescript and will be built using typescript.

The tests use SWC as the transpiler.  They are functional tests using the example application in the test folder.

You can test the example application using `npm start`.  This uses [parcel](parceljs.org/).
