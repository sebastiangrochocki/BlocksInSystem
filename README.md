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
11. [IframeComponent](#iframecomponent)
12. [Input Component](#input-component)
13. [Loader Component](#loader-component)
14. [Paragraph Component](#paragraph-component)
15. [Spinner Component](#spinner-component)
16. [Tag Component](#tag-component)
17. [TextArea Component](#textarea-component)
18. [TopBanner Component](#topbanner-component)
19. [UserListItem Component](#userlistitem-component)
20. [YoutubeVideo Component](#youtubevideo-component)

## Avatar Component

### Overview

`Avatar` is a React component that displays a user's avatar image. It optionally shows a tooltip with the user's name and role when hovered over. If no avatar image is provided, it randomly selects one from a set of demo avatars.

### Properties

- **avatar**: *String* (optional)
   - The URL or path of the avatar image.
   - If not provided, a random avatar from demo images is used.

- **altText**: *String* (optional)
   - Alternative text for the avatar image for accessibility purposes.
   - Defaults to "Avatar" if not provided.

- **role**: *String* (optional)
   - The role or title associated with the user.
   - Displayed in the tooltip alongside the `altText`.

### Usage

Here is an example of how to use the `Avatar` component:

```jsx
import Avatar from './path/to/Avatar';

<Avatar
  avatar="/path/to/image.jpg"
  altText="John Doe"
  role="Software Engineer"
/>
```
## Badge Component

### Overview

The `Badge` component is a simple React component used to display a small badge, typically used to show a count or to label an element. This component is styled using SCSS.

### Properties

- **label**: *String* (required)
   - The text to be displayed inside the badge.

### Usage

Here's an example of how to use the `Badge` component:

```jsx
import Badge from './path/to/Badge';

<Badge label="New" />
```
## BadgeLevel Component

### Overview

The `BadgeLevel` component is a React component designed to display a badge level using numbers and accompanying images. It's a simple, visually appealing way to represent different levels, such as user achievements, proficiency levels, etc.

### Properties

- **badge**: *Number* (optional)
   - Represents the badge level to be displayed.
   - Defaults to 1 if not provided.

### Usage

Here's an example of how to use the `BadgeLevel` component:

```jsx
import BadgeLevel from './path/to/BadgeLevel';

<BadgeLevel badge={3} />
```
## Button Component

### Overview

The `Button` component is a versatile and customizable button for React applications. It supports different sizes, styles, badges, loading states, and more. It is styled using SCSS and can be easily integrated into various parts of your application.

### Properties

- **disabled**: *Boolean* (optional)
   - Disables the button when `true`.
   - Default is `false`.

- **showBadge**: *Boolean* (optional)
   - Shows a badge on the button when `true`.
   - Default is `false`.

- **badgeLabel**: *String* (optional)
   - The text to be displayed inside the badge.

- **size**: *String* (optional)
   - Sets the size of the button (`small`, `medium`, `large`).
   - Default is `medium`.

- **variant**: *String* (optional)
   - Sets the button's style variant (`solid`, `outline`, etc.).
   - Default is `solid`.

- **onClick**: *Function* (optional)
   - Callback function to be called when the button is clicked.

- **onDrop**: *Function* (optional)
   - Callback function to be called on drop event.

- **fluid**: *Boolean* (optional)
   - If `true`, the button takes the full width of its container.
   - Default is `false`.

- **isLoading**: *Boolean* (optional)
   - Shows a loading spinner and disables the button when `true`.
   - Default is `false`.

- **children**: *Node* (optional)
   - The content to be displayed inside the button.

### Usage

Here's an example of how to use the `Button` component:

```jsx
import Button from './path/to/Button';

<Button
  onClick={handleClick}
  variant="solid"
  size="large"
  showBadge
  badgeLabel="New"
>
  Click Me
</Button>
```
## CheckboxCustom Component

### Overview

`CheckboxCustom` is a React component that provides a customized checkbox experience. Built using `@radix-ui/react-checkbox`, this component offers a flexible and accessible way to integrate checkbox functionality into your application, with support for custom styling and additional content.

### Properties

- **customID**: *String* (required)
   - A unique identifier for the checkbox. It is used to associate the checkbox with its label.

- **children**: *Node* (optional)
   - The content to be displayed alongside the checkbox. Typically used for the label text.

- **checked**: *Boolean* (optional)
   - Determines whether the checkbox is checked.
   - Default is `false`.

- **onChange**: *Function* (optional)
   - Callback function that is called when the checkbox's checked state changes.

- **disabled**: *Boolean* (optional)
   - Disables the checkbox when set to `true`.
   - Default is `false`.

### Usage

Here's an example of how to use the `CheckboxCustom` component:

```jsx
import CheckboxCustom from './path/to/CheckboxCustom';

<CheckboxCustom customID="agreeTerms" onChange={handleCheckboxChange}>
  I agree to the terms and conditions
</CheckboxCustom>
```
## CodeHighlight Component

### Overview

`CodeHighlight` is a simple React component designed to display blocks of code with basic styling. It is suitable for rendering code snippets or configurations in a clear and readable format.

### Properties

- **text**: *String* (required)
   - The code text to be displayed within the component.

### Usage

Here's an example of how to use the `CodeHighlight` component:

```jsx
import CodeHighlight from './path/to/CodeHighlight';

<CodeHighlight text={`const greeting = "Hello, world!";`} />
```
## CustomToast Component

### Overview

`CustomToast` is a React component built using `@radix-ui/react-toast` that provides a customizable toast notification with an optional progress bar and a 'Don't Show Again' button. It can be used to display brief messages or alerts to users, with a smooth fade-out effect controlled by a timer.

### Properties

- **showToast**: *Boolean* (required)
   - Controls the visibility of the toast. When `true`, the toast is shown.

- **setShowToast**: *Function* (required)
   - A callback function to update the `showToast` state.

- **headline**: *String* (optional)
   - The headline or title text of the toast.

- **text**: *String* (required)
   - The main content text of the toast.

- **time**: *Number* (required)
   - The duration (in milliseconds) for which the toast is displayed.

- **showAgain**: *Boolean* (optional)
   - When `true`, displays a 'Don't Show Again' button.

- **onDismissForever**: *Function* (optional)
   - A callback function triggered when the 'Don't Show Again' button is clicked.

- **simple**: *Boolean* (optional)
   - If `true`, displays the toast in a simple style without a headline.

### Usage

Here's an example of how to use the `CustomToast` component:

```jsx
import CustomToast from './path/to/CustomToast';

<CustomToast
  showToast={showToastState}
  setShowToast={setShowToastState}
  headline="Success!"
  text="Your action was successful."
  time={3000}
  showAgain={true}
  onDismissForever={handleDismissForever}
/>
```
## Flex Component

### Overview

The `Flex` component is a React utility component designed to streamline the usage of CSS flexbox layout. It provides a simple and intuitive way to create flexible and responsive layouts with ease.

### Properties

- **children**: *Node* (required)
   - The child elements to be rendered inside the flex container.

- **direction**: *String* (optional)
   - Specifies the flex direction (`row`, `column`, etc.).
   - Default is `row`.

- **gap**: *Number* (optional)
   - The space between the child elements (in pixels).

- **style**: *Object* (optional)
   - Custom inline styles to be applied to the flex container.

- **align**: *String* (optional)
   - Aligns items along the cross axis (`center`, `flex-start`, `flex-end`, etc.).

- **justify**: *String* (optional)
   - Justifies items along the main axis (`center`, `space-between`, `space-around`, etc.).

- **id**: *String* (optional)
   - The ID attribute of the flex container.

- **customClass**: *String* (optional)
   - Additional custom CSS class names to be applied.

- **onClick**: *Function* (optional)
   - Callback function to be called when the flex container is clicked.

### Usage

Here's an example of how to use the `Flex` component:

```jsx
import Flex from './path/to/Flex';

<Flex direction="column" align="center" justify="space-between" gap={10}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```
## Heading Component

### Overview

The `Heading` component is a versatile React component for rendering heading text. It allows for dynamic heading levels and customizable font weights, making it suitable for various textual hierarchies and styles across your application.

### Properties

- **level**: *Number* (optional)
   - Specifies the heading level (1 through 6).
   - Corresponds to HTML heading tags (`h1`, `h2`, `h3`, etc.).
   - Default is `1`.

- **weight**: *String* (optional)
   - Sets the font weight of the heading (`regular`, `bold`, etc.).
   - Default is `regular`.

- **children**: *Node* (required)
   - The content to be displayed inside the heading tag.

### Usage

Here's an example of how to use the `Heading` component:

```jsx
import Heading from './path/to/Heading';

<Heading level={2} weight="bold">
  Your Main Title Here
</Heading>
```
## IconButton Component

### Overview

The `IconButton` component is a React component designed for creating icon-based buttons. It supports different sizes and styles and can optionally include a badge. The component is styled using SCSS and is ideal for actions that are better represented with icons rather than text.

### Properties

- **size**: *String* (optional)
   - Specifies the size of the icon button (`small`, `medium`, `large`).
   - Default is `medium`.

- **variant**: *String* (optional)
   - Sets the button's style variant (`solid`, `outline`, etc.).
   - Default is `solid`.

- **onClick**: *Function* (optional)
   - Callback function to be called when the button is clicked.

- **children**: *Node* (required)
   - The icon to be displayed inside the button.

- **showBadge**: *Boolean* (optional)
   - Shows a badge on the button when `true`.
   - Default is `false`.

- **badgeLabel**: *String* (optional)
   - The text to be displayed inside the badge.

### Usage

Here's an example of how to use the `IconButton` component:

```jsx
import IconButton from './path/to/IconButton';
import { YourIconComponent } from 'your-icon-library';

<IconButton onClick={handleClick} size="large" variant="outline">
  <YourIconComponent />
</IconButton>
```
## IframeComponent

### Overview

`IframeComponent` is a React component designed to embed an iframe within your application. It's ideal for integrating external web content, such as videos, web pages, or other resources that support iframe embedding. Additionally, this component offers a fallback display for Figma integration when no URL is provided.

### Properties

- **url**: *String* (optional)
   - The URL of the web page or resource to be embedded in the iframe.
   - If not provided, a default Figma integration message is displayed.

- **title**: *String* (optional)
   - A descriptive title for the iframe, which is useful for accessibility.
   - Default is `"Iframe Title"`.

### Usage

Here's an example of how to use the `IframeComponent`:

```jsx
import IframeComponent from './path/to/IframeComponent';

<IframeComponent
  url="https://example.com"
  title="Embedded Content"
/>
```
## Input Component

### Overview

`Input` is a versatile React component for rendering various types of input fields. It supports text, search, number, date, and other input types, along with customizable labels, placeholders, error messages, and an optional search icon for search inputs.

### Properties

- **pattern**: *String* (optional)
   - A regular expression pattern that the input's value must match.

- **label**: *String* (optional)
   - The label text displayed alongside the input field.
   - Default is `"First name"`.

- **placeholder**: *String* (optional)
   - The placeholder text displayed inside the input field.
   - Default is `"Enter first name"`.

- **errormsg**: *String* | *Boolean* (optional)
   - The error message to display when the input's value is invalid.
   - Set to `false` to hide the error message.
   - Default is `"Invalid format."`.

- **type**: *String* (optional)
   - The type of the input (`text`, `search`, `number`, `date`, etc.).
   - Default is `"text"`.

- **value**: *String* (required)
   - The current value of the input.

- **onChange**: *Function* (required)
   - Callback function to handle changes to the input's value.

- **className**: *String* (optional)
   - Additional custom CSS class names to be applied.

- **disabled**: *Boolean* (optional)
   - Disables the input field when set to `true`.

- **onClick**: *Function* (optional)
   - Callback function to be called when the input field is clicked.

- **validation**: *Boolean* (optional)
   - Enables validation display for the input field.

- **name**: *String* (optional)
   - The name attribute of the input field.

### Usage

Here's an example of how to use the `Input` component:

```jsx
import Input from './path/to/Input';

<Input
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  value={email}
  onChange={handleEmailChange}
/>
```
## Loader Component

### Overview

The `Loader` component is a React component that displays an animated loading indicator. It uses `lottie-react` to render a smooth and visually appealing animation, making it ideal for indicating loading states or processing actions in your application.

### Dependencies

- `lottie-react`: This package is required to handle the Lottie animations. Ensure it is installed in your project.

### Usage

The component does not accept any props and is used simply by rendering it where a loading indicator is needed:

```jsx
import Loader from './path/to/Loader';

<Loader />
```
## Paragraph Component

### Overview

The `Paragraph` component is a React component for rendering text content. It provides options to customize the size and weight of the text, making it a versatile choice for displaying paragraphs or other textual elements in your application.

### Properties

- **customClass**: *String* (optional)
   - Additional custom CSS class names to be applied to the paragraph.

- **size**: *String* (optional)
   - Specifies the size of the text (`small`, `medium`, `large`, etc.).
   - Default is `medium`.

- **weight**: *String* (optional)
   - Sets the font weight of the text (`regular`, `bold`, etc.).
   - Default is `regular`.

- **children**: *Node* (required)
   - The text content to be displayed inside the paragraph.

### Usage

Here's an example of how to use the `Paragraph` component:

```jsx
import Paragraph from './path/to/Paragraph';

<Paragraph size="large" weight="bold">
  This is a large, bold paragraph.
</Paragraph>
```
## Spinner Component

### Overview

The `Spinner` component is a React component designed to display an animated spinner, typically used as a loading indicator. It uses `lottie-react` to render a Lottie animation, providing a visually appealing and smooth animation for indicating loading or processing states in your application.

### Dependencies

- `lottie-react`: This package is required to handle the Lottie animations. Ensure it is installed in your project.

### Usage

The component does not accept any props and is used simply by rendering it where an animated spinner is needed:

```jsx
import Spinner from './path/to/Spinner';

<Spinner />
```
## Tag Component

### Overview

The `Tag` component is a simple yet versatile React component used for displaying tag-like elements in your application. It supports different visual variants, allowing it to be easily integrated and used in various contexts such as labeling, categorizing, or marking items.

### Properties

- **text**: *String* (required)
   - The text content to be displayed inside the tag.

- **variant**: *String* (optional)
   - The visual style variant of the tag (`Normal`, `Highlighted`, etc.).
   - Default is `"Normal"`.

### Usage

Here's an example of how to use the `Tag` component:

```jsx
import Tag from './path/to/Tag';

<Tag text="Technology" variant="Highlighted" />
```
## TextArea Component

### Overview

The `TextArea` component is a React component that renders a multi-line text input field, commonly used for collecting longer text entries like comments, messages, or descriptions. It includes customizable properties for labels, placeholders, and more.

### Properties

- **label**: *String* (optional)
   - The label text displayed above the textarea.
   - Default is `"Your Label"`.

- **placeholder**: *String* (optional)
   - The placeholder text displayed inside the textarea when it's empty.
   - Default is `"Enter your text"`.

- **value**: *String* (required)
   - The current value of the textarea.

- **onChange**: *Function* (required)
   - Callback function that is called when the value of the textarea changes.

- **className**: *String* (optional)
   - Additional custom CSS class names to be applied.

- **disabled**: *Boolean* (optional)
   - Disables the textarea when set to `true`.

### Usage

Here's an example of how to use the `TextArea` component:

```jsx
import TextArea from './path/to/TextArea';

<TextArea
  label="Message"
  placeholder="Type your message here"
  value={message}
  onChange={handleMessageChange}
/>
```
## TopBanner Component

### Overview

The `TopBanner` component is a React component designed to display notification banners at the top of the page. It is capable of handling dynamic content and styles and includes functionality to dismiss notifications permanently.

### Properties

- **username**: *String* (required)
   - The username of the currently logged-in user, used for tracking dismissed notifications.

- **notifications**: *Array* (required)
   - An array of notification objects. Each object should contain `title`, `text`, `id`, and `style`.

### Usage

Here's an example of how to use the `TopBanner` component:

```jsx
import TopBanner from './path/to/TopBanner';

const notifications = [
    {
        "title": "Community is live!",
        "text": "Now you can browse through templates.",
        "id": "1212121214",
        "style": "info"
    },
    {
        "title": "New Navigation",
        "text": "New release comes with the brand new LeftSide Panel navigation.",
        "id": "1212121212",
        "style": "info"
    }
];

<TopBanner username="johndoe" notifications={notifications} />
```
## UserListItem Component

### Overview

`UserListItem` is a React component designed to display a user item in a list format. It includes an avatar, user name, user role, badge level, and an interactive dropdown menu with action items. This component is ideal for user lists in applications like social networks, team management tools, or any platform that displays user information.

### Properties

- **name**: *String* (required)
   - The name of the user to be displayed.

- **badge**: *Number* (required)
   - The badge level of the user, represented numerically.

- **avatar**: *String* (optional)
   - The URL or path to the user's avatar image.

- **role**: *String* (optional)
   - The role or title of the user.

### Usage

Here's an example of how to use the `UserListItem` component:

```jsx
import UserListItem from './path/to/UserListItem';

<UserListItem
  name="John Doe"
  badge={3}
  avatar="/path/to/avatar.jpg"
  role="Developer"
/>
```
## YoutubeVideo Component

### Overview

The `YoutubeVideo` component is a React component for embedding YouTube videos in your application. It allows for seamless integration of YouTube content by simply providing the video ID.

### Properties

- **videoId**: *String* (required)
   - The unique identifier (ID) of the YouTube video to be embedded.

### Usage

Here's an example of how to use the `YoutubeVideo` component:

```jsx
import YoutubeVideo from './path/to/YoutubeVideo';

<YoutubeVideo videoId="dQw4w9WgXcQ" />
```
