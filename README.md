# BlocksInSystem

[![BlocksIn Design System Logo](https://sebikostudio.com/utils/blocks-in-system-logo.svg)](https://system.blocksin.com/)

Click logo to visit system.blocksin.com

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-1.png)

### Table of Contents

1. [Avatar Component](#avatar-component)
2. [AvatarGroup Component](#avatargroup-component)
3. [Badge Component](#badge-component)
4. [BadgeLevel Component](#badgelevel-component)
5. [Button Component](#button-component)
6. [Calendar Component](#calendar-component)
7. [Card Component](#card-component)
8. [Checkbox Component](#checkbox-component)
9. [ComboBox Component](#combobox-component)
10. [CodeHighlight Component](#codehighlight-component)
11. [Toast Component](#toast-component)
12. [DropdownMenu Component](#dropdownmenu-component)
13. [Flex Component](#flex-component)
14. [Heading Component](#heading-component)
15. [IconButton Component](#iconbutton-component)
16. [Iframe Component](#iframe-component)
17. [Input Component](#input-component)
18. [Loader Component](#loader-component)
19. [Paragraph Component](#paragraph-component)
20. [Pill Component](#pill-component)
21. [Spinner Component](#spinner-component)
22. [Switch Component](#switch-component)
23. [Table Component](#table-component)
24. [Tabs Component](#tabs-component)
25. [Tag Component](#tag-component)
26. [TextArea Component](#textarea-component)
27. [Toggle Component](#toggle-component)
28. [ToggleGroup Component](#togglegroup-component)
29. [Tooltip Component](#tooltip-component)
30. [TopBanner Component](#topbanner-component)
31. [UserOnHoldItem Component](#useronholditem-component)
32. [UserListItem Component](#userlistitem-component)
33. [UserItem Component](#useritem-component)
34. [Youtube Component](#youtube-component)
35. [ScrollArea Component](#scrollarea-component)
36. [Select Component](#select-component)
37. [Separator Component](#separator-component)

## Introduction

Welcome to BlocksIn System, a custom React component library designed to extend the functionalities of the Radix component library. This library offers a range of components, from basic UI elements to complex functionalities, tailored for developers looking to streamline their React application development.

To ensure optimal appearance and functionality, BlocksIn System uses 'Open Sans' for body text and 'Darker Grotesque' for accent fonts. Add these fonts to your application by declaring the following variables in your main `app.css` file:

```css
--font-body: "OpenSans";
--font-body-bold: "OpenSans-Bold";
--font-accent: "DarkerGrotesque";
--font-accent-bold: "DarkerGrotesque-Bold";
--font-accent-light: "DarkerGrotesque-Light";
```

## Avatar Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-avatar.png)

### Overview

`Avatar` is a React component that displays a user's avatar image. It optionally shows a tooltip with the user's name and role when hovered over. If no avatar image is provided, it randomly selects one from a set of demo avatars.

### Properties

- **avatar**: _String_ (optional)

  - The URL or path of the avatar image.
  - If not provided, a random avatar from demo images is used.

- **altText**: _String_ (optional)

  - Alternative text for the avatar image for accessibility purposes.
  - Defaults to "Avatar" if not provided.

- **text**: _String_ (optional)

  - Text for the avatar image for accessibility purposes.
  - Defaults to "Avatar" if not provided.

- **role**: _String_ (optional, deprecated)

  - The role or title associated with the user.
  - Displayed in the tooltip alongside the `altText`.

- **size**: _String_ (optional)

  - Default "large".

### Usage

Here is an example of how to use the `Avatar` component:

```jsx
import { Avatar } from "blocksin-system";

<Avatar
  avatar="/path/to/image.jpg"
  altText="John Doe"
  role="Software Engineer"
  size="medium
/>;
```

## AvatarGroup Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-avatargroup.png)

### Overview

`AvatarGroup` is a React component that provides a container for displaying a group of avatars. It uses the `Flex` component to align the avatars horizontally.

### Properties

- **children**: ReactNode:
  - The avatar components to be grouped together.

### Usage

Here's an example of how to use the `AvatarGroup` component:

```jsx
import AvatarGroup from "./AvatarGroup";
import Avatar from "./Avatar";

<AvatarGroup>
  <Avatar avatar="/path/to/image1.jpg" altText="John Doe" />
  <Avatar avatar="/path/to/image2.jpg" altText="Jane Doe" />
  <Avatar avatar="/path/to/image3.jpg" altText="Alice Smith" />
</AvatarGroup>;
```

## Badge Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-badge.png)

### Overview

The `Badge` component is a simple React component used to display a small badge, typically used to show a count or to label an element. This component is styled using SCSS.

### Properties

- **label**: _String_ (required)

  - The text to be displayed inside the badge.

### Usage

Here's an example of how to use the `Badge` component:

```jsx
import { Badge } from "blocksin-system";

<Badge label="New" />;
```

## BadgeLevel Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-badgelevel.png)

### Overview

The `BadgeLevel` component is a React component designed to display a badge level using numbers and accompanying images. It's a simple, visually appealing way to represent different levels, such as user achievements, proficiency levels, etc.

### Properties

- **badge**: _Number_ (optional)

  - Represents the badge level to be displayed.
  - Defaults to 1 if not provided.

### Usage

Here's an example of how to use the `BadgeLevel` component:

```jsx
import { BadgeLevel } from "blocksin-system";

<BadgeLevel badge={3} />;
```

## Button Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-button.png)

### Overview

The `Button` component is a versatile and customizable button for React applications. It supports different sizes, styles, badges, loading states, and more. It is styled using SCSS and can be easily integrated into various parts of your application.

### Properties

- **disabled**: _Boolean_ (optional)

  - Disables the button when `true`.
  - Default is `false`.

- **showBadge**: _Boolean_ (optional)

  - Shows a badge on the button when `true`.
  - Default is `false`.

- **badgeLabel**: _String_ (optional)

  - The text to be displayed inside the badge.

- **size**: _String_ (optional)

  - Sets the size of the button (`small`, `medium`, `large`).
  - Default is `medium`.

- **variant**: _String_ (optional)

  - Sets the button's style variant (`solid`, `outline`, etc.).
  - Default is `solid`.

- **onClick**: _Function_ (optional)

  - Callback function to be called when the button is clicked.

- **onDrop**: _Function_ (optional)

  - Callback function to be called on drop event.

- **fluid**: _Boolean_ (optional)

  - If `true`, the button takes the full width of its container.
  - Default is `false`.

- **isLoading**: _Boolean_ (optional)

  - Shows a loading spinner and disables the button when `true`.
  - Default is `false`.

- **helper**: _String_ (optional)

  - A helper text to be displayed alongside the button content.

- **iconLeft**: _Component_ (optional)

  - A React component (icon) to be displayed on the left side of the button text.

- **children**: _Node_ (optional)

  - The content to be displayed inside the button.

### Usage

Here's an example of how to use the `Button` component:

```jsx
import { Button } from "blocksin-system";

<Button
  onClick={handleClick}
  variant="solid"
  size="large"
  showBadge
  badgeLabel="New"
>
  Click Me
</Button>;
```

Here's an example of how to use the helper in component:

```jsx
import { Button } from "blocksin-system";
import { YourIconComponent } from "your-icon-library";

<Button
  onClick={handleClick}
  variant="solid"
  size="large"
  showBadge
  badgeLabel="New"
  helper="This is a helper text"
  iconLeft={YourIconComponent}
>
  Click Me
</Button>;
```

## Calendar Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-calendar.png)

### Overview

`Calendar` is a React component that provides a customizable date picker. It allows users to select a single date or a range of dates. The component is built on top of `react-datepicker` and can be integrated with custom input components.

### Properties

- **children**: _ReactElement_ (required)

  - The custom input component that will be used as the trigger for the calendar.

- **selectedDate**: _Date | [Date, Date]_ (required)

  - The currently selected date or date range.

- **onChange**: _Function_ (required)

  - A function that will be called with the new date or date range when the selection changes.

- **range**: _Boolean_ (optional)

  - If `true`, enables the selection of a date range. Defaults to `false`.

- **...props**: _Object_ (optional)

  - Any additional props will be passed to the underlying `react-datepicker` component.

### Usage

Here is an example of how to use the `Calendar` component with a custom input component:

```jsx
import React, { useState } from "react";
import { Calendar, Input } from "bloksin-system";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      selectedDate={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    >
      <Input placeholder="Select a date" readOnly />
    </Calendar>
  );
}

export default MyComponent;
```

## Card Component

![BlocksIn Design System Card](https://sebikostudio.com/utils/system-card.png)

### Overview

`Card` is a React component that provides a flexible container for content. It supports different variants, such as outline and ghost, and allows for customization through props like `noPadding`.

### Properties

- **children**: _ReactNode_

  - The content to be displayed inside the card.

- **noPadding**: _Boolean_

  - If true, removes padding from the card content.

- **variant**: _String_

  - The variant of the card. Possible values are "outline" and "ghost".

## Usage

Here is an example of how to use the `Card` component:

```jsx
import { Card } from "blocksin-system";

<Card noPadding variant="outline">
  {/* Card Content */}
</Card>;
```

## ComboBox Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-combobox.png)

### Overview

The `ComboBox` component is a multi-select dropdown component that allows users to select multiple options from a list. It supports custom rendering of options, including displaying avatars and other custom elements.

### Properties

- **options**: _Array_ (required)

  - An array of option objects that can be selected. Each option object should have a `label`, `value`, and optionally an `avatar` property.

- **value**: _Array_ (required)

  - An array of selected option objects.

- **onChange**: _Function_ (required)

  - A callback function that is called when the selected options change. It receives the updated array of selected options as an argument.

- **placeholder**: _String_ (optional)

  - A placeholder text to display when no options are selected.

- **isMulti**: _Boolean_ (optional)

  - A boolean indicating whether multiple options can be selected. Defaults to `true`.

- **fluid**: _Boolean_ (optional)

  - A boolean indicating whether the component should expand to fill its container's width.

### Usage

Here's an example of how to use the `ComboBox` component:

```jsx
import { ComboBox } from "blocksin-system";

const options = [
  { label: "John Doe", value: "1", avatar: "path/to/avatar1.jpg" },
  { label: "Jane Doe", value: "2", avatar: "path/to/avatar2.jpg" },
  { label: "Bob Smith", value: "3", avatar: "path/to/avatar3.jpg" },
];

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <ComboBox
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      placeholder="Select owners..."
      isMulti={true}
      fluid
    />
  );
};

export default App;
```

## Checkbox Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-checkbox.png)

### Overview

`Checkbox` is a React component that provides a customized checkbox experience. Built using `@radix-ui/react-checkbox`, this component offers a flexible and accessible way to integrate checkbox functionality into your application, with support for custom styling and additional content.

### Properties

- **customID**: _String_ (required)

  - A unique identifier for the checkbox. It is used to associate the checkbox with its label.

- **children**: _Node_ (optional)

  - The content to be displayed alongside the checkbox. Typically used for the label text.

- **checked**: _Boolean_ (optional)

  - Determines whether the checkbox is checked.
  - Default is `false`.

- **onChange**: _Function_ (optional)

  - Callback function that is called when the checkbox's checked state changes.

- **disabled**: _Boolean_ (optional)

  - Disables the checkbox when set to `true`.
  - Default is `false`.

### Usage

Here's an example of how to use the `CheckboxCustom` component:

```jsx
import { Checkbox } from "blocksin-system";

<Checkbox customID="agreeTerms" onChange={handleCheckboxChange}>
  I agree to the terms and conditions
</Checkbox>;
```

## CodeHighlight Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-codehighlight.png)

### Overview

`CodeHighlight` is a simple React component designed to display blocks of code with basic styling. It is suitable for rendering code snippets or configurations in a clear and readable format.

### Properties

- **text**: _String_ (required)

  - The code text to be displayed within the component.

### Usage

Here's an example of how to use the `CodeHighlight` component:

```jsx
import { CodeHighlight } from "blocksin-system";

<CodeHighlight text={`const greeting = "Hello, world!";`} />;
```

## Toast Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-toast.png)

### Overview

`Toast` is a React component built using `@radix-ui/react-toast` that provides a customizable toast notification with an optional progress bar and a 'Don't Show Again' button. It can be used to display brief messages or alerts to users, with a smooth fade-out effect controlled by a timer.

### Properties

- **showToast**: _Boolean_ (required)

  - Controls the visibility of the toast. When `true`, the toast is shown.

- **setShowToast**: _Function_ (required)

  - A callback function to update the `showToast` state.

- **headline**: _String_ (optional)

  - The headline or title text of the toast.

- **text**: _String_ (required)

  - The main content text of the toast.

- **time**: _Number_ (required)

  - The duration (in milliseconds) for which the toast is displayed.

- **showAgain**: _Boolean_ (optional)

  - When `true`, displays a 'Don't Show Again' button.

- **onDismissForever**: _Function_ (optional)

  - A callback function triggered when the 'Don't Show Again' button is clicked.

- **simple**: _Boolean_ (optional)

  - If `true`, displays the toast in a simple style without a headline.

### Usage

Here's an example of how to use the `CustomToast` component:

```jsx
import { Toast } from "blocksin-system";

<Toast
  showToast={showToastState}
  setShowToast={setShowToastState}
  headline="Success!"
  text="Your action was successful."
  time={3000}
  showAgain={true}
  onDismissForever={handleDismissForever}
/>;
```

## DropdownMenu Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-dropdownmenu.png)

### Overview

`DropdownMenu` is a React component that provides a customizable dropdown menu for various actions or options. It is built using the Radix UI Dropdown Menu primitive and includes features such as submenus, radio groups, checkbox items, and custom icons.

### Properties DropdownMenu.Content

- **sideOffset**: _Number_ (optional)

  - The distance in pixels from the trigger element to the content.

- **align**: _String_ (optional)

  - The alignment of the content relative to the trigger. Can be "start", "center", or "end".

### Usage

Here is an example of how to use the `DropdownMenu` component:

```jsx
import { DropdownMenu, IconButton } from "blocksin-system";
import { SliderIcon } from "./path/to/your/components";

const MyComponent = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton variant="outline">
          <SliderIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side="bottom" align="start">
        <DropdownMenu.RadioGroup defaultValue="Item1">
          <DropdownMenu.RadioItem value="Item1">Item 1</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="Item2">Item 2</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="Item3">Item 3</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
```

## Flex Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-flex.png)

### Overview

The `Flex` component is a React utility component designed to streamline the usage of CSS flexbox layout. It provides a simple and intuitive way to create flexible and responsive layouts with ease.

### Properties

- **children**: _Node_ (required)

  - The child elements to be rendered inside the flex container.

- **direction**: _String_ (optional)

  - Specifies the flex direction (`row`, `column`, etc.).
  - Default is `row`.

- **gap**: _Number_ (optional)

  - The space between the child elements (in pixels).

- **style**: _Object_ (optional)

  - Custom inline styles to be applied to the flex container.

- **align**: _String_ (optional)

  - Aligns items along the cross axis (`center`, `flex-start`, `flex-end`, etc.).

- **justify**: _String_ (optional)

  - Justifies items along the main axis (`center`, `space-between`, `space-around`, etc.).

- **id**: _String_ (optional)

  - The ID attribute of the flex container.

- **customClass**: _String_ (optional)

  - Additional custom CSS class names to be applied.

- **onClick**: _Function_ (optional)

  - Callback function to be called when the flex container is clicked.

- **wrap**: _String_ (optional)

  - Allows flex items to wrap as needed (wrap, nowrap, wrapreverse).

- **fluid**: _Boolean_ (optional)

  - If true, the container will take up all available space.

### Usage

Here's an example of how to use the `Flex` component:

```jsx
import { Flex } from "blocksin-system";

<Flex direction="column" align="center" justify="space-between" gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>;
```

## Heading Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-heading.png)

### Overview

The `Heading` component is a versatile React component for rendering heading text. It allows for dynamic heading levels and customizable font weights, making it suitable for various textual hierarchies and styles across your application.

### Properties

- **level**: _Number_ (optional)

  - Specifies the heading level (1 through 6).
  - Corresponds to HTML heading tags (`h1`, `h2`, `h3`, etc.).
  - Default is `1`.

- **weight**: _String_ (optional)

  - Sets the font weight of the heading (`regular`, `bold`, etc.).
  - Default is `regular`.

- **children**: _Node_ (required)

  - The content to be displayed inside the heading tag.

- **style**: _String_ (optional)

  - Custom style tag.

### Usage

Here's an example of how to use the `Heading` component:

```jsx
import { Heading } from "blocksin-system";

<Heading level={2} weight="bold">
  Your Main Title Here
</Heading>;
```

## IconButton Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-iconbutton.png)

### Overview

The `IconButton` component is a React component designed for creating icon-based buttons. It supports different sizes and styles and can optionally include a badge. The component is styled using SCSS and is ideal for actions that are better represented with icons rather than text.

### Properties

- **disabled**: _Boolean_ (optional)

  - Disables the button when `true`.
  - Default is `false`.

- **isLoading**: _Boolean_ (optional)

  - Shows a loading spinner and disables the button when `true`.
  - Default is `false`.

- **size**: _String_ (optional)

  - Specifies the size of the icon button (`small`, `medium`, `large`).
  - Default is `medium`.

- **variant**: _String_ (optional)

  - Sets the button's style variant (`solid`, `outline`, etc.).
  - Default is `solid`.

- **onClick**: _Function_ (optional)

  - Callback function to be called when the button is clicked.

- **children**: _Node_ (required)

  - The icon to be displayed inside the button.

- **showBadge**: _Boolean_ (optional)

  - Shows a badge on the button when `true`.
  - Default is `false`.

- **badgeLabel**: _String_ (optional)

  - The text to be displayed inside the badge.

### Usage

Here's an example of how to use the `IconButton` component:

```jsx
import { IconButton } from "blocksin-system";
import { YourIconComponent } from "your-icon-library";

<IconButton onClick={handleClick} size="large" variant="outline">
  <YourIconComponent />
</IconButton>;
```

## Iframe Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-iframe.png)

### Overview

`Iframe` is a React component designed to embed an iframe within your application. It's ideal for integrating external web content, such as videos, web pages, or other resources that support iframe embedding. Additionally, this component offers a fallback display for Figma integration when no URL is provided.

### Properties

- **url**: _String_ (optional)

  - The URL of the web page or resource to be embedded in the iframe.
  - If not provided, a default Figma integration message is displayed.

- **title**: _String_ (optional)

  - A descriptive title for the iframe, which is useful for accessibility.
  - Default is `"Iframe Title"`.

### Usage

Here's an example of how to use the `Iframe`:

```jsx
import { Iframe } from "blocksin-system";

<Iframe url="https://example.com" title="Embedded Content" />;
```

## Input Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-input.png)

### Overview

`Input` is a versatile React component for rendering various types of input fields. It supports text, search, number, date, and other input types, along with customizable labels, placeholders, error messages, and an optional search icon for search inputs.

### Properties

- **pattern**: _String_ (optional)

  - A regular expression pattern that the input's value must match.

- **label**: _String_ (optional)

  - The label text displayed alongside the input field.
  - Default is `"First name"`.

- **placeholder**: _String_ (optional)

  - The placeholder text displayed inside the input field.
  - Default is `"Enter first name"`.

- **errormsg**: _String_ | _Boolean_ (optional)

  - The error message to display when the input's value is invalid.
  - Set to `false` to hide the error message.
  - Default is `"Invalid format."`.

- **type**: _String_ (optional)

  - The type of the input (`text`, `search`, `number`, `date`, etc.).
  - Default is `"text"`.

- **value**: _String_ (required)

  - The current value of the input.

- **onChange**: _Function_ (required)

  - Callback function to handle changes to the input's value.

- **className**: _String_ (optional)

  - Additional custom CSS class names to be applied.

- **disabled**: _Boolean_ (optional)

  - Disables the input field when set to `true`.

- **onClick**: _Function_ (optional)

  - Callback function to be called when the input field is clicked.

- **validation**: _Boolean_ (optional)

  - Enables validation display for the input field.

- **name**: _String_ (optional)

  - The name attribute of the input field.

- **fluid**: _Boolean_ (optional)

  - If true, the container will take up all available space.

### Usage

Here's an example of how to use the `Input` component:

```jsx
import { Input } from "blocksin-system";

<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  value={email}
  onChange={handleEmailChange}
/>;
```

## Loader Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-loader.gif)

### Overview

The `Loader` component is a React component that displays an animated loading indicator. It uses `lottie-react` to render a smooth and visually appealing animation, making it ideal for indicating loading states or processing actions in your application.

### Dependencies

- `lottie-react`: This package is required to handle the Lottie animations. Ensure it is installed in your project.

### Usage

The component does not accept any props and is used simply by rendering it where a loading indicator is needed:

```jsx
import { Loader } from "blocksin-system";

<Loader />;
```

## Paragraph Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-paragraph.png)

### Overview

The `Paragraph` component is a React component for rendering text content. It provides options to customize the size and weight of the text, making it a versatile choice for displaying paragraphs or other textual elements in your application.

### Properties

- **customClass**: _String_ (optional)

  - Additional custom CSS class names to be applied to the paragraph.

- **size**: _String_ (optional)

  - Specifies the size of the text (`small`, `medium`, `large`, etc.).
  - Default is `medium`.

- **weight**: _String_ (optional)

  - Sets the font weight of the text (`regular`, `bold`, etc.).
  - Default is `regular`.

- **children**: _Node_ (required)

  - The text content to be displayed inside the paragraph.

### Usage

Here's an example of how to use the `Paragraph` component:

```jsx
import { Paragraph } from "blocksin-system";

<Paragraph size="large" weight="bold">
  This is a large, bold paragraph.
</Paragraph>;
```

## Pill Component

![BlocksIn Design System Pill](https://sebikostudio.com/utils/system-pill.png)

### Overview

`Pill` is a React component that represents a pill-shaped element, commonly used to display status or category information. It accepts a `status` prop to determine its visual appearance.

### Properties

- **children**: _ReactNode_

  - The content to be displayed inside the pill.

- **status**: _String_

  - The status of the pill, which determines its color and styling. Possible values are "error", "warning", "success", or "disabled".

### Usage

Here is an example of how to use the `Pill` component:

```jsx
import { Pill } from "blocksin-system";

<Pill status="success">Active</Pill>;
```

## Spinner Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-spinner.gif)

### Overview

The `Spinner` component is a React component designed to display an animated spinner, typically used as a loading indicator. It uses `lottie-react` to render a Lottie animation, providing a visually appealing and smooth animation for indicating loading or processing states in your application.

### Dependencies

- `lottie-react`: This package is required to handle the Lottie animations. Ensure it is installed in your project.

### Usage

The component does not accept any props and is used simply by rendering it where an animated spinner is needed:

```jsx
import { Spinner } from "blocksin-system";

<Spinner />;
```

## Switch Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-switch.png)

### Overview

The `Switch` component is a customizable switch control for React applications, leveraging the capabilities of Radix UI's Switch component. It provides the option to include a label and can be used within a `Flex` container for better layout management. This component is suitable for toggling between two states such as enabling/disabling settings or features.

### Properties

- **id** (_String_ - required):

  - A unique identifier for the switch. It associates the switch with its label for accessibility.

- **checked** (_Boolean_ - required):

  - Indicates the switch's state, either "on" (true) or "off" (false).

- **onCheckedChange** (_Function_ - required):

  - Callback function triggered when the switch's state changes, receiving the new state as an argument.

- **children** (_Node_ - optional):

  - Content displayed alongside the switch, typically used as a label. When provided, the switch and label are rendered inside a `Flex` container for layout purposes.

### Styling

The component uses the following CSS classes for styling, which can be customized in the SCSS file:

- `.SwitchRoot`: Applies to the switch control itself.
- `.SwitchThumb`: Targets the thumb of the switch, the part that moves.
- `.Label`: Used for the label element when `children` are provided.

Adjust these classes in your SCSS to fit the design of your application.

### Usage Examples

#### With Label

```jsx
import { Switch } from "blocksin-system";

function ExampleWithLabel() {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <Switch
      id="exampleSwitch"
      checked={isToggled}
      onCheckedChange={setIsToggled}
    >
      Toggle me
    </Switch>
  );
}
```

## Table Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-table.png)

### Overview

`Table` is a React component designed for displaying tabular data. It supports features such as pagination, sorting, filtering, and row selection.

### Properties

- **columns**:
  - Array of objects defining the columns of the table. Each object can have the following properties:
  - **Header**: String or JSX - The header of the column.
  - **accessor**: String - The key of the data to be accessed for this column.
  - **Cell**: Function (optional) - Custom renderer for the cell. It receives the cell value and the row data as arguments.
  - **maxWidth**: String (optional) - The maximum width of the column.
- **data**:
  - Array of objects - The data to be displayed in the table.
- **pageSize**:
  - Number - The number of rows to display per page.
- **onRowClick**: Function (optional):
  - Callback function to be called when a row is clicked. It receives the row data as an argument.
- **multiSelect**: Boolean (optional):
  - If `true`, enables multiple row selection with checkboxes.
- **onMultiSelect**: Function (optional):
  - Callback function to be called when rows are selected or deselected. It receives an array of selected row data as an argument.
- **maxPagination**: Number (optional):
  - The maximum number of pagination buttons to display.
- **fluid**: Boolean (optional):
  - If `true`, the table will take the full width of its container.
- **search**: Boolean (optional):
  - If `true`, enables a filter input to search the table.
- **fullBorder**: Boolean (optional):
  - If `true`, adds borders to all sides of the table cells.
- **sorting**: Boolean (optional):
  - If `true`, enables sorting functionality on the table columns.

### Usage

Here's an example of how to use the `Table` component:

```jsx
import { Table } from "blocksin-system";

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age" },
  { Header: "Country", accessor: "country" },
];

const data = [
  { name: "John Doe", age: 30, country: "USA" },
  { name: "Jane Doe", age: 25, country: "Canada" },
];

<Table
  columns={columns}
  data={data}
  pageSize={5}
  onRowClick={(row) => console.log(row)}
  multiSelect={true}
  onMultiSelect={(selectedRows) => console.log(selectedRows)}
  maxPagination={5}
  fluid={true}
  search={true}
  fullBorder={true}
  sorting={true}
/>;
```

Here's an example of how to add components inside the `Table` component:

```jsx
import { Table, Paragraph } from "blocksin-system";

const columns = [
  { Header: "Name", accessor: "name" },
  { Header: "Age", accessor: "age", maxWidth: "100px" },
  {
    Header: "Country",
    accessor: "country",
    Cell: (value) => <Paragraph size="large">{value}</Paragraph>,
  },
];

const data = [
  { name: "John Doe", age: 30, country: "USA" },
  { name: "Jane Doe", age: 25, country: "Canada" },
];

<Table columns={columns} data={data} pageSize={5} sorting={false} />;
```

## Tabs Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-tabs.png)

### Overview

The `Tabs` component is a powerful and flexible React component for creating tabbed interfaces in your application. It allows users to easily switch between different views or content sections, providing an organized and intuitive user experience.

### Properties

- **defaultValue**: _String_ (required)

  - The default value of the currently selected tab.

- **fluid**: _Boolean_ (optional)

  - If `true`, the tabs will take up the full width of their container.
  - Default is `false`.

- **children**: _ReactNode_ (required)

  - The content of the tabs, including `Tabs.List`, `Tabs.Trigger`, and `Tabs.Content` components.

### Usage

Here's an example of how to use the `Tabs` component:

```jsx
import { Tabs } from "blocksin-system";

<Tabs defaultValue="tab1" fluid>
  <Tabs.List aria-label="Manage your account">
    <Tabs.Trigger value="tab1">Sign Up</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Sign In</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">{/* Sign Up content */}</Tabs.Content>
  <Tabs.Content value="tab2">{/* Sign In content */}</Tabs.Content>
</Tabs>;
```

## Tag Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-tag.png)

### Overview

The `Tag` component is a simple yet versatile React component used for displaying tag-like elements in your application. It supports different visual variants, allowing it to be easily integrated and used in various contexts such as labeling, categorizing, or marking items.

### Properties

- **text**: _String_ (required)

  - The text content to be displayed inside the tag.

- **variant**: _String_ (optional)

  - The visual style variant of the tag (`Normal`, `Highlighted`, etc.).
  - Default is `"Normal"`.

### Usage

Here's an example of how to use the `Tag` component:

```jsx
import { Tag } from "blocksin-system";

<Tag text="Technology" variant="Highlighted" />;
```

## TextArea Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-textarea.png)

### Overview

The `TextArea` component is a React component that renders a multi-line text input field, commonly used for collecting longer text entries like comments, messages, or descriptions. It includes customizable properties for labels, placeholders, and more.

### Properties

- **label**: _String_ (optional)

  - The label text displayed above the textarea.
  - Default is `"Your Label"`.

- **placeholder**: _String_ (optional)

  - The placeholder text displayed inside the textarea when it's empty.
  - Default is `"Enter your text"`.

- **value**: _String_ (required)

  - The current value of the textarea.

- **onChange**: _Function_ (required)

  - Callback function that is called when the value of the textarea changes.

- **className**: _String_ (optional)

  - Additional custom CSS class names to be applied.

- **disabled**: _Boolean_ (optional)

  - Disables the textarea when set to `true`.

### Usage

Here's an example of how to use the `TextArea` component:

```jsx
import { TextArea } from "blocksin-system";

<TextArea
  label="Message"
  placeholder="Type your message here"
  value={message}
  onChange={handleMessageChange}
/>;
```

## Toggle Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-toggle.png)

### Overview

`Toggle` is a React component that provides a single toggle button, allowing the user to switch between an on and off state. It is built using Radix UI's `Toggle` primitive.

### Properties

- **children**: ReactNode
  - The content of the toggle button.
- **onPressedChange**: (pressed: boolean) => void
  - A callback function that is called when the toggle button is pressed. It receives a boolean indicating the new pressed state.
- **ref**: React.Ref (optional)
  - A ref to be forwarded to the root element of the `Toggle`.

### Usage

Here's an example of how to use the `Toggle` component:

```jsx
import Toggle from "./Toggle";
import { ViewGridIcon } from "@radix-ui/react-icons";

<Toggle onPressedChange={(pressed) => console.log(pressed)}>
  <ViewGridIcon />
</Toggle>;
```

## ToggleGroup Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-togglegroup.png)

### Overview

`ToggleGroup` is a React component that provides a group of toggle buttons, allowing the user to select one or multiple options. It is built using Radix UI's `ToggleGroup` primitive.

### Properties

- **children**: ReactNode
  - The toggle buttons to be grouped together.
- **ref**: React.Ref (optional)
  - A ref to be forwarded to the root element of the `ToggleGroup`.

### Usage

Here's an example of how to use the `ToggleGroup` component:

```jsx
import ToggleGroup from "./ToggleGroup";
import { ViewGridIcon, ViewListIcon } from "@radix-ui/react-icons";

<ToggleGroup type="single" aria-label="View options">
  <ToggleGroup.Item value="grid" aria-label="Grid view">
    <ViewGridIcon />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="list" aria-label="List view">
    <ViewListIcon />
  </ToggleGroup.Item>
</ToggleGroup>;
```

## Tooltip Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-tooltip.png)

### Overview

The `Tooltip` component is a lightweight and customizable React component used for displaying contextual information when hovering over or focusing on an element. It supports various positioning and can be easily integrated into any UI. Check radix-ui.com for more info.

### Properties

- **delayDuration**: _Number_ (optional)

  - The delay duration in milliseconds before the tooltip appears.
  - Default is `300`.

- **side**: _String_ (optional)

  - The preferred side of the trigger element to position the tooltip (`top`, `right`, `bottom`, `left`).
  - Default is `"top"`.

### Usage

Here's an example of how to use the `Tooltip` component:

```jsx
import React from "react";
import { Tooltip, IconButton, Paragraph } from "blocksin-system";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const Example = () => {
  return (
    <Tooltip delayDuration={200}>
      <Tooltip.Trigger asChild>
        <IconButton>
          <ChatBubbleIcon />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">
        <Paragraph size="medium">Test</Paragraph>
      </Tooltip.Content>
    </Tooltip>
  );
};

export default Example;
```

## TopBanner Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-topbanner.png)

### Overview

The `TopBanner` component is a React component designed to display notification banners at the top of the page. It is capable of handling dynamic content and styles and includes functionality to dismiss notifications permanently.

### Properties

- **username**: _String_ (required)

  - The username of the currently logged-in user, used for tracking dismissed notifications.

- **notifications**: _Array_ (required)

  - An array of notification objects. Each object should contain `title`, `text`, `id`, and `style`.

### Usage

Here's an example of how to use the `TopBanner` component:

```jsx
import { TopBanner } from "blocksin-system";

const notifications = [
  {
    title: "Community is live!",
    text: "Now you can browse through templates.",
    id: "1212121214",
    style: "info",
  },
  {
    title: "New Navigation",
    text: "New release comes with the brand new LeftSide Panel navigation.",
    id: "1212121212",
    style: "info",
  },
];

<TopBanner username="johndoe" notifications={notifications} />;
```

## UserOnHoldItem Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-useronholditem.png)

The `UserOnHoldItem` component is designed to manage user items in a hold or approval state within your application. It displays user information alongside actions to approve, reject, or remove a user, providing a convenient way to handle user management tasks.

### Properties

- **fluid**: _Boolean_ (optional)

  - If `true`, the component will take the full width of its container. Default is `false`.

- **user**: _Object_ (required)

  - An object representing the user. Should include `firstName`, `email`, `avatar`, `role`, and `isApproved` properties.

- **onApprove**: _Function_ (required)

  - Callback function called when the "Approve" button is clicked. Receives the `user` object as an argument.

- **onReject**: _Function_ (required)

  - Callback function called when the "Reject" button is clicked. Receives the `user` object as an argument.

- **onRemove**: _Function_ (required)

  - Callback function called when the "Remove User" button is clicked. Receives the `user` object as an argument.

### Usage

Here's how you can use the `UserOnHoldItem` component within your application:

```jsx
import { UserOnHoldItem } from "blocksin-system";

const user = {
  firstName: "Jane Doe",
  email: "jane.doe@example.com",
  avatar: "/path/to/avatar.jpg",
  role: "User",
  isApproved: false,
};

function handleApprove(user) {
  console.log("Approving user:", user);
}

function handleReject(user) {
  console.log("Rejecting user:", user);
}

function handleRemove(user) {
  console.log("Removing user:", user);
}

<UserOnHoldItem
  fluid={true}
  user={user}
  onApprove={handleApprove}
  onReject={handleReject}
  onRemove={handleRemove}
/>;
```

## UserListItem Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-userlistitem.png)

### Overview

`UserListItem` is a React component designed to display a user item in a list format. It includes an avatar, user name, user role, badge level, and an interactive dropdown menu with action items. This component is ideal for user lists in applications like social networks, team management tools, or any platform that displays user information.

### Properties

- **name**: _String_ (required)

  - The name of the user to be displayed.

- **badge**: _Number_ (required)

  - The badge level of the user, represented numerically.

- **avatar**: _String_ (optional)

  - The URL or path to the user's avatar image.

- **role**: _String_ (optional)

  - The role or title of the user.

### Usage

Here's an example of how to use the `UserListItem` component:

```jsx
import { UserListItem } from "blocksin-system";

<UserListItem
  name="John Doe"
  badge={3}
  avatar="/path/to/avatar.jpg"
  role="Developer"
/>;
```

## UserItem Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-useritem.png)

### Overview

`UserItem` is a React component that displays a user's information, including their avatar, name, and helper text (such as a role or status). It is designed to be used in various contexts, such as inside tables or dropdown menu items.

### Properties

- **name**: _String_:
  - The name of the user.
- **avatar**: _String_:
  - The URL or path of the avatar image.
- **helper**: _String_ (optional):
  - Additional text to display, such as the user's role or status.
- **role**: _String_ (optional):
  - The role or title associated with the user, displayed in the tooltip of the avatar.

### Usage

Here's an example of how to use the `UserItem` component:

```jsx
import UserItem from "./UserItem";

<UserItem
  name="John Doe"
  avatar="/path/to/avatar.jpg"
  helper="Software Engineer"
  role="Team Lead"
/>;
```

## Youtube Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-youtube.png)

### Overview

The `Youtube` component is a React component for embedding YouTube videos in your application. It allows for seamless integration of YouTube content by simply providing the video ID.

### Properties

- **videoId**: _String_ (required)

  - The unique identifier (ID) of the YouTube video to be embedded.

### Usage

Here's an example of how to use the `Youtube` component:

```jsx
import { Youtube } from "blocksin-system";

<Youtube videoId="dQw4w9WgXcQ" />;
```

## ScrollArea Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-scrollarea.png)

### Overview

`ScrollArea` is a React component that provides a customizable scrollable area with optional custom scrollbars. It is built using Radix UI's `ScrollArea` primitive.

### Properties

- **children**: ReactNode
  - The content to be displayed inside the scrollable area.
- **style**: CSSProperties (optional)
  - Additional styles to be applied to the root element of the `ScrollArea`.
- **ref**: React.Ref (optional)
  - A ref to be forwarded to the root element of the `ScrollArea`.

### Usage

Here's an example of how to use the `ScrollArea` component:

```jsx
import ScrollArea from "./ScrollArea";
import { Flex } from "./Flex";

<ScrollArea style={{ height: "200px", width: "150px" }}>
  <Flex
    style={{
      height: "900px",
      width: "200px",
      background: "var(--gray-200)",
    }}
  >
    Long rectangle
  </Flex>
</ScrollArea>;
```

## Select Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-select.png)

### Overview

`Select` is a React component that provides a customizable dropdown menu for selecting an option from a list. It is built using the Radix UI Select primitive and includes features such as custom icons, scrolling buttons, and item indicators.

### Properties

- **value**: _String_ (required)

  - The value of the currently selected item.

- **onValueChange**: _Function_ (required)

  - Callback function that is called when the selected value changes.

### Usage

Here is an example of how to use the `Select` component:

```jsx
import { Select } from "blocksin-system";
import { useState } from "react";

const MyComponent = () => {
  const [role, setRole] = useState("");

  return (
    <Select value={role} onValueChange={setRole}>
      <Select.Trigger aria-label="Role">
        <Select.Value placeholder="Select a role" />
      </Select.Trigger>
      <Select.Content side="bottom" sideOffset={8} align="start">
        <Select.Item value="Design">Product Designer</Select.Item>
        <Select.Item value="Developer">Developer</Select.Item>
        <Select.Item value="PM">PM</Select.Item>
        <Select.Item value="Brand">Brand Designer</Select.Item>
      </Select.Content>
    </Select>
  );
};
```

## Separator Component

![BlocksIn Design System Logo](https://sebikostudio.com/utils/system-separator.png)

### Overview

`Separator` is a simple React component designed to visually divide content within layouts. It renders as a horizontal line, helping to organize and separate different sections or elements on a page.

### Properties

- **vertical**: _Boolean_ (optional)

  - Determines the orientation of the separator. When set to `true`, the separator is displayed vertically. By default, it is rendered horizontally.

### Usage

Below are examples illustrating how to use the `Separator` component in both horizontal and vertical orientations.

#### Horizontal Separator

```jsx
import { Separator } from "blocksin-system";

// Renders a horizontal separator
<Separator />;
```
