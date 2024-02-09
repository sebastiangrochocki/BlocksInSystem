# BlocksInSystem

![BlocksIn Design System Logo](https://sebikostudio.com/utils/blocks-in-system-logo.svg)

### Table of Contents

1. [Avatar Component](#avatar-component)
2. [Badge Component](#badge-component)
3. [BadgeLevel Component](#badgelevel-component)
4. [Button Component](#button-component)
5. [CheckboxCustom Component](#checkboxcustom-component)
6. [CodeHighlight Component](#codehighlight-component)
7. [CustomToast Component](#customtoast-component)
8. [Flex Component](#flex-component)
9. [Heading Component](#heading-component)
10. [IconButton Component](#iconbutton-component)
11. [Iframe Component](#iframe-component)
12. [Input Component](#input-component)
13. [Loader Component](#loader-component)
14. [Paragraph Component](#paragraph-component)
15. [Spinner Component](#spinner-component)
16. [Switch Component](#switch-component)
17. [Tag Component](#tag-component)
18. [TextArea Component](#textarea-component)
19. [TopBanner Component](#topbanner-component)
20. [UserOnHoldItem Component](#useronholditem-component)
21. [UserListItem Component](#userlistitem-component)
22. [Youtube Component](#youtube-component)
23. [Separator Component](#separator-component)

## Introduction

Welcome to BlocksIn System, a custom React component library designed to extend the functionalities of the Radix component library. This library offers a range of components, from basic UI elements to complex functionalities, tailored for developers looking to streamline their React application development.

To ensure optimal appearance and functionality, BlocksIn System uses 'Open Sans' for body text and 'Darker Grotesque' for accent fonts. Add these fonts to your application by declaring the following variables in your main `app.css` file:

```css
--font-body: "Open Sans";
--font-accent: "Darker Grotesque";
```

## Avatar Component

### Overview

`Avatar` is a React component that displays a user's avatar image. It optionally shows a tooltip with the user's name and role when hovered over. If no avatar image is provided, it randomly selects one from a set of demo avatars.

### Properties

- **avatar**: _String_ (optional)

  - The URL or path of the avatar image.
  - If not provided, a random avatar from demo images is used.

- **altText**: _String_ (optional)

  - Alternative text for the avatar image for accessibility purposes.
  - Defaults to "Avatar" if not provided.

- **role**: _String_ (optional)
  - The role or title associated with the user.
  - Displayed in the tooltip alongside the `altText`.

### Usage

Here is an example of how to use the `Avatar` component:

```jsx
import Avatar from "./path/to/Avatar";

<Avatar
  avatar="/path/to/image.jpg"
  altText="John Doe"
  role="Software Engineer"
/>;
```

## Badge Component

### Overview

The `Badge` component is a simple React component used to display a small badge, typically used to show a count or to label an element. This component is styled using SCSS.

### Properties

- **label**: _String_ (required)
  - The text to be displayed inside the badge.

### Usage

Here's an example of how to use the `Badge` component:

```jsx
import Badge from "./path/to/Badge";

<Badge label="New" />;
```

## BadgeLevel Component

### Overview

The `BadgeLevel` component is a React component designed to display a badge level using numbers and accompanying images. It's a simple, visually appealing way to represent different levels, such as user achievements, proficiency levels, etc.

### Properties

- **badge**: _Number_ (optional)
  - Represents the badge level to be displayed.
  - Defaults to 1 if not provided.

### Usage

Here's an example of how to use the `BadgeLevel` component:

```jsx
import BadgeLevel from "./path/to/BadgeLevel";

<BadgeLevel badge={3} />;
```

## Button Component

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

- **children**: _Node_ (optional)
  - The content to be displayed inside the button.

### Usage

Here's an example of how to use the `Button` component:

```jsx
import Button from "./path/to/Button";

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

## CheckboxCustom Component

### Overview

`CheckboxCustom` is a React component that provides a customized checkbox experience. Built using `@radix-ui/react-checkbox`, this component offers a flexible and accessible way to integrate checkbox functionality into your application, with support for custom styling and additional content.

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
import CheckboxCustom from "./path/to/CheckboxCustom";

<CheckboxCustom customID="agreeTerms" onChange={handleCheckboxChange}>
  I agree to the terms and conditions
</CheckboxCustom>;
```

## CodeHighlight Component

### Overview

`CodeHighlight` is a simple React component designed to display blocks of code with basic styling. It is suitable for rendering code snippets or configurations in a clear and readable format.

### Properties

- **text**: _String_ (required)
  - The code text to be displayed within the component.

### Usage

Here's an example of how to use the `CodeHighlight` component:

```jsx
import CodeHighlight from "./path/to/CodeHighlight";

<CodeHighlight text={`const greeting = "Hello, world!";`} />;
```

## CustomToast Component

### Overview

`CustomToast` is a React component built using `@radix-ui/react-toast` that provides a customizable toast notification with an optional progress bar and a 'Don't Show Again' button. It can be used to display brief messages or alerts to users, with a smooth fade-out effect controlled by a timer.

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
import CustomToast from "./path/to/CustomToast";

<CustomToast
  showToast={showToastState}
  setShowToast={setShowToastState}
  headline="Success!"
  text="Your action was successful."
  time={3000}
  showAgain={true}
  onDismissForever={handleDismissForever}
/>;
```

## Flex Component

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
import Flex from "./path/to/Flex";

<Flex direction="column" align="center" justify="space-between" gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>;
```

## Heading Component

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

### Usage

Here's an example of how to use the `Heading` component:

```jsx
import Heading from "./path/to/Heading";

<Heading level={2} weight="bold">
  Your Main Title Here
</Heading>;
```

## IconButton Component

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
import IconButton from "./path/to/IconButton";
import { YourIconComponent } from "your-icon-library";

<IconButton onClick={handleClick} size="large" variant="outline">
  <YourIconComponent />
</IconButton>;
```

## Iframe Component

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
import Iframe from "./path/to/Iframe";

<Iframe url="https://example.com" title="Embedded Content" />;
```

## Input Component

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

### Usage

Here's an example of how to use the `Input` component:

```jsx
import Input from "./path/to/Input";

<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  value={email}
  onChange={handleEmailChange}
/>;
```

## Loader Component

### Overview

The `Loader` component is a React component that displays an animated loading indicator. It uses `lottie-react` to render a smooth and visually appealing animation, making it ideal for indicating loading states or processing actions in your application.

### Dependencies

- `lottie-react`: This package is required to handle the Lottie animations. Ensure it is installed in your project.

### Usage

The component does not accept any props and is used simply by rendering it where a loading indicator is needed:

```jsx
import Loader from "./path/to/Loader";

<Loader />;
```

## Paragraph Component

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
import Paragraph from "./path/to/Paragraph";

<Paragraph size="large" weight="bold">
  This is a large, bold paragraph.
</Paragraph>;
```

## Spinner Component

### Overview

The `Spinner` component is a React component designed to display an animated spinner, typically used as a loading indicator. It uses `lottie-react` to render a Lottie animation, providing a visually appealing and smooth animation for indicating loading or processing states in your application.

### Dependencies

- `lottie-react`: This package is required to handle the Lottie animations. Ensure it is installed in your project.

### Usage

The component does not accept any props and is used simply by rendering it where an animated spinner is needed:

```jsx
import Spinner from "./path/to/Spinner";

<Spinner />;
```

## CustomSwitch Component Documentation

### Overview

The `CustomSwitch` component is a customizable switch control for React applications, leveraging the capabilities of Radix UI's Switch component. It provides the option to include a label and can be used within a `Flex` container for better layout management. This component is suitable for toggling between two states such as enabling/disabling settings or features.

### Properties

- **id** (_String_ - required): A unique identifier for the switch. It associates the switch with its label for accessibility.
- **checked** (_Boolean_ - required): Indicates the switch's state, either "on" (true) or "off" (false).
- **onCheckedChange** (_Function_ - required): Callback function triggered when the switch's state changes, receiving the new state as an argument.
- **children** (_Node_ - optional): Content displayed alongside the switch, typically used as a label. When provided, the switch and label are rendered inside a `Flex` container for layout purposes.

### Styling

The component uses the following CSS classes for styling, which can be customized in the SCSS file:

- `.SwitchRoot`: Applies to the switch control itself.
- `.SwitchThumb`: Targets the thumb of the switch, the part that moves.
- `.Label`: Used for the label element when `children` are provided.

Adjust these classes in your SCSS to fit the design of your application.

### Usage Examples

#### With Label

```jsx
import CustomSwitch from "./path/to/CustomSwitch";

function ExampleWithLabel() {
  const [isToggled, setIsToggled] = React.useState(false);

  return (
    <CustomSwitch
      id="exampleSwitch"
      checked={isToggled}
      onCheckedChange={setIsToggled}
    >
      Toggle me
    </CustomSwitch>
  );
}
```

## Tag Component

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
import Tag from "./path/to/Tag";

<Tag text="Technology" variant="Highlighted" />;
```

## TextArea Component

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
import TextArea from "./path/to/TextArea";

<TextArea
  label="Message"
  placeholder="Type your message here"
  value={message}
  onChange={handleMessageChange}
/>;
```

## TopBanner Component

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
import TopBanner from "./path/to/TopBanner";

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
import UserOnHoldItem from "./path/to/UserOnHoldItem";
import Avatar from "./path/to/Avatar";

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
import UserListItem from "./path/to/UserListItem";

<UserListItem
  name="John Doe"
  badge={3}
  avatar="/path/to/avatar.jpg"
  role="Developer"
/>;
```

## Youtube Component

### Overview

The `Youtube` component is a React component for embedding YouTube videos in your application. It allows for seamless integration of YouTube content by simply providing the video ID.

### Properties

- **videoId**: _String_ (required)
  - The unique identifier (ID) of the YouTube video to be embedded.

### Usage

Here's an example of how to use the `Youtube` component:

```jsx
import YoutubeVideo from "./path/to/Youtube";

<Youtube videoId="dQw4w9WgXcQ" />;
```

## Separator Component

### Overview

`Separator` is a simple React component designed to visually divide content within layouts. It renders as a horizontal line, helping to organize and separate different sections or elements on a page.

### Properties

- **vertical**: _Boolean_ (optional)
  - Determines the orientation of the separator. When set to `true`, the separator is displayed vertically. By default, it is rendered horizontally.

### Usage

Below are examples illustrating how to use the `Separator` component in both horizontal and vertical orientations.

#### Horizontal Separator

```jsx
import Separator from "./path/to/Separator";

// Renders a horizontal separator
<Separator />;
```
