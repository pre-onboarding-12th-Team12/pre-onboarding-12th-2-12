/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { ReactNode, createContext, useRef, useState } from 'react';
// import { getIssues } from '../apis/remotes';
import { Issues } from '../types/Issue';

// interface GlobalContextPops {
//   issues: Issues;
//   isLoading: boolean;
//   isError: boolean;
//   fetchIssues: () => void;
// }

// const GlobalContext: GlobalContextPops = {
//   issues: [],
//   isLoading: false,
//   isError: false,
//   fetchIssues: () => {
//     throw new Error();
//   },
// };

const GlobalContext: any = {
  issues: [],
  isLoading: false,
  isError: false,
  fetchIssues: () => {},
};

export const IssueContext = createContext(GlobalContext);

export function IssueContextProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const pageRef = useRef(1);
  const isEndRef = useRef(false);

  const fetchIssues = () => {
    if (isEndRef.current) return;
    setIsLoading(true);
    //   try {
    //     const newIssues = await getIssues(pageRef.current);
    //     if (newIssues.length === 0) {
    //     isEndRef.current = true;
    //     return;
    //     }
    //     pageRef.current = pageRef.current + 1;
    //     setIssues(prevIssues => [...prevIssues, ...newIssues]);
    //   } catch (error) {
    //     setIsError(true);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    setTimeout(() => {
      try {
        setIssues(MOCK_DATA);
        // throw Error();
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <IssueContext.Provider value={{ issues, isLoading, fetchIssues, isError }}>
      {children}
    </IssueContext.Provider>
  );
}

const MOCK_DATA = [
  {
    url: 'https://api.github.com/repos/facebook/react/issues/13991',
    repository_url: 'https://api.github.com/repos/facebook/react',
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/13991/labels{/name}',
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/13991/comments',
    events_url:
      'https://api.github.com/repos/facebook/react/issues/13991/events',
    html_url: 'https://github.com/facebook/react/issues/13991',
    id: 374587589,
    node_id: 'MDU6SXNzdWUzNzQ1ODc1ODk=',
    number: 13991,
    title: 'Hooks + multiple instances of React',
    user: {
      login: 'brunolemos',
      id: 619186,
      node_id: 'MDQ6VXNlcjYxOTE4Ng==',
      avatar_url: 'https://avatars.githubusercontent.com/u/619186?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/brunolemos',
      html_url: 'https://github.com/brunolemos',
      followers_url: 'https://api.github.com/users/brunolemos/followers',
      following_url:
        'https://api.github.com/users/brunolemos/following{/other_user}',
      gists_url: 'https://api.github.com/users/brunolemos/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/brunolemos/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/brunolemos/subscriptions',
      organizations_url: 'https://api.github.com/users/brunolemos/orgs',
      repos_url: 'https://api.github.com/users/brunolemos/repos',
      events_url: 'https://api.github.com/users/brunolemos/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/brunolemos/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 710375792,
        node_id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Discussion',
        name: 'Type: Discussion',
        color: 'fef2c0',
        default: false,
        description: null,
      },
      {
        id: 1109410193,
        node_id: 'MDU6TGFiZWwxMTA5NDEwMTkz',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Hooks',
        name: 'Component: Hooks',
        color: 'c2f27b',
        default: false,
        description: '',
      },
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 480,
    created_at: '2018-10-27T00:34:08Z',
    updated_at: '2023-08-23T21:48:19Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: '# To people coming from search: please [read this page first](https://reactjs.org/warnings/invalid-hook-call-warning.html). It contains most common possible fixes!\r\n\r\n\r\n\r\n**Do you want to request a *feature* or report a *bug*?**\r\n\r\nEnhancement\r\n\r\n**What is the current behavior?**\r\n\r\nI had multiple instances of React by mistake.\r\n\r\nWhen trying to use hooks, got this error:\r\n`hooks can only be called inside the body of a function component`\r\n\r\nWhich is not correct since I was using function components. Took me a while to find the real cause of the issue.\r\n\r\n**What is the expected behavior?**\r\n\r\nShow the correct error message. Maybe detect that the app has multiple instances of React and say that it may be the reason of bugs. ',
    reactions: {
      url: 'https://api.github.com/repos/facebook/react/issues/13991/reactions',
      total_count: 346,
      '+1': 270,
      '-1': 0,
      laugh: 0,
      hooray: 2,
      confused: 2,
      heart: 15,
      rocket: 31,
      eyes: 26,
    },
    timeline_url:
      'https://api.github.com/repos/facebook/react/issues/13991/timeline',
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: 'https://api.github.com/repos/facebook/react/issues/11347',
    repository_url: 'https://api.github.com/repos/facebook/react',
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/11347/labels{/name}',
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/11347/comments',
    events_url:
      'https://api.github.com/repos/facebook/react/issues/11347/events',
    html_url: 'https://github.com/facebook/react/issues/11347',
    id: 267902244,
    node_id: 'MDU6SXNzdWUyNjc5MDIyNDQ=',
    number: 11347,
    title: 'RFC: Plan for custom element attributes/properties in React 19',
    user: {
      login: 'robdodson',
      id: 1066253,
      node_id: 'MDQ6VXNlcjEwNjYyNTM=',
      avatar_url: 'https://avatars.githubusercontent.com/u/1066253?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/robdodson',
      html_url: 'https://github.com/robdodson',
      followers_url: 'https://api.github.com/users/robdodson/followers',
      following_url:
        'https://api.github.com/users/robdodson/following{/other_user}',
      gists_url: 'https://api.github.com/users/robdodson/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/robdodson/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/robdodson/subscriptions',
      organizations_url: 'https://api.github.com/users/robdodson/orgs',
      repos_url: 'https://api.github.com/users/robdodson/repos',
      events_url: 'https://api.github.com/users/robdodson/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/robdodson/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 127893911,
        node_id: 'MDU6TGFiZWwxMjc4OTM5MTE=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20DOM',
        name: 'Component: DOM',
        color: 'fef2c0',
        default: false,
        description: null,
      },
      {
        id: 710375792,
        node_id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Discussion',
        name: 'Type: Discussion',
        color: 'fef2c0',
        default: false,
        description: null,
      },
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 261,
    created_at: '2017-10-24T05:28:49Z',
    updated_at: '2023-07-31T14:27:19Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: "This is meant to address #7249. The doc outlines the pros and cons of various approaches React could use to handle attributes and properties on custom elements.\r\n\r\n# TOC/Summary\r\n\r\n- Background\r\n- Proposals\r\n  * Option 1: Only set properties\r\n    + Pros\r\n      - Easy to understand/implement\r\n      - Avoids conflict with future global attributes\r\n      - Takes advantage of custom element \"upgrade\"\r\n      - Custom elements treated like any other React component\r\n    + Cons\r\n      - Possibly a breaking change\r\n      - Need ref to set attribute\r\n      - Not clear how server-side rendering would work\r\n  * Option 2: Properties-if-available\r\n    + Pros\r\n      - Non-breaking change\r\n    + Cons\r\n      - Developers need to understand the heuristic\r\n      - Falling back to attributes may conflict with future globals\r\n  * Option 3: Differentiate properties with a sigil\r\n    + Pros\r\n      - Non-breaking change that developers can opt-in to\r\n      - Similar to how other libraries handle attributes/properties\r\n      - The system is explicit\r\n    + Cons\r\n      - It’s new syntax\r\n      - Not clear how server-side rendering would work\r\n  * Option 4: Add an attributes object\r\n    + Pros\r\n      - The system is explicit\r\n      - Extending syntax may also solve issues with event handling\r\n    + Cons\r\n      - It’s new syntax\r\n      - It may be a breaking change\r\n      - It may be a larger change than any of the previous proposals\r\n  * Option 5: An API for consuming custom elements\r\n    + Pros\r\n      - The system is explicit\r\n      - Non-breaking change\r\n      - Idiomatic to React\r\n    + Cons\r\n      - Could be a lot of work for a complex component\r\n      - May bloat bundle size\r\n      - Config needs to keep pace with the component\r\n\r\n# Background\r\n\r\nWhen React tries to pass data to a custom element it always does so using HTML attributes.\r\n\r\n```jsx\r\n<x-foo bar={baz}> // same as setAttribute('bar', baz)\r\n```\r\n\r\nBecause attributes must be serialized to strings, this approach creates problems when the data being passed is an object or array. In that scenario, we end up with something like:\r\n\r\n```html\r\n<x-foo bar=\"[object Object]\">\r\n```\r\n\r\nThe workaround for this is to use a `ref` to manually set the property.\r\n\r\n```jsx\r\n<x-foo ref={el => el.bar = baz}>\r\n```\r\n\r\nThis workaround feels a bit unnecessary as the majority of custom elements being shipped today are written with libraries which automatically generate JavaScript properties that back all of their exposed attributes. And anyone hand-authoring a vanilla custom element is [encouraged to follow this practice](https://developers.google.com/web/fundamentals/web-components/best-practices#attributes-properties) as well. We'd like to ideally see runtime communication with custom elements in React use JavaScript properties by default.\r\n\r\nThis doc outlines a few proposals for how React could be updated to make this happen.\r\n\r\n# Proposals\r\n\r\n## Option 1: Only set properties\r\n\r\nRather than try to decide if a property or attribute should be set, React could *always* set properties on custom elements. React would **NOT** check to see if the property exists on the element beforehand.\r\n\r\n**Example:**\r\n\r\n```jsx\r\n<x-foo bar={baz}>\r\n```\r\n\r\nThe above code would result in React setting the `.bar` property of the `x-foo` element equal to the value of `baz`.\r\n\r\nFor camelCased property names, React could use the same style it uses today for properties like `tabIndex`.\r\n\r\n```jsx\r\n<x-foo squidInk={pasta}> // sets .squidInk = pasta\r\n```\r\n\r\n### Pros\r\n\r\n#### Easy to understand/implement\r\n\r\nThis model is simple, explicit, and dovetails with React’s [\"JavaScript-centric API to the DOM\"](https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#why-are-we-changing-this).\r\n\r\nAny element created with libraries like Polymer or Skate will automatically generate properties to back their exposed attributes. These elements should all \"just work\" with the above approach. Developers hand-authoring vanilla components are encouraged to [back attributes with properties](https://developers.google.com/web/fundamentals/web-components/best-practices#always-accept-primitive-data-strings-numbers-booleans-as-either-attributes--or-properties) as that mirrors how *modern* (i.e. not oddballs like `<input>`) HTML5 elements (`<video>`, `<audio>`, etc.) have been implemented.\r\n\r\n#### Avoids conflict with future global attributes\r\n\r\nWhen React sets an attribute on a custom element there’s always the risk that a future version of HTML will ship a similarly named attribute and break things. This concern was [discussed with spec authors](https://github.com/w3c/webcomponents/issues/654) but there is no clear solution to the problem. Avoiding attributes entirely (except when a developer explicitly sets one using `ref`) may sidestep this issue until the browsers come up with a better solution.\r\n\r\n#### Takes advantage of custom element \"upgrade\"\r\n\r\nCustom elements can be lazily [upgraded](https://developers.google.com/web/fundamentals/web-components/customelements#upgrades) on the page and some PRPL patterns rely on this technique. During the upgrade process, a custom element can access the properties passed to it by React—even if those properties were set before the definition loaded—and use them to render initial state.\r\n\r\n#### Custom elements treated like any other React component\r\n\r\nWhen React components pass data to one another they already use properties. This would just make custom elements behave the same way.\r\n\r\n### Cons\r\n\r\n#### Possibly a breaking change\r\n\r\nIf a developer has been hand-authoring vanilla custom elements which only have an attributes API, then they will need to update their code or their app will break. The fix would be to use a `ref` to set the attribute (explained below).\r\n\r\n#### Need ref to set attribute\r\n\r\nBy changing the behavior so properties are preferred, it means developers will need to use a `ref` in order to explicitly set an attribute on a custom element.\r\n\r\n```jsx\r\n<custom-element ref={el => el.setAttribute('my-attr', val)} />\r\n```\r\n\r\nThis is just a reversal of the current behavior where developers need a `ref` in order to set a property. Since developers should rarely need to set attributes on custom elements, this seems like a reasonable trade-off.\r\n\r\n#### Not clear how server-side rendering would work\r\n\r\nIt's not clear how this model would map to server-side rendering custom elements. React could assume that the properties map to similarly named attributes and attempt to set those on the server, but this is far from bulletproof and would possibly require a heuristic for things like camelCased properties -> dash-cased attributes.\r\n\r\n## Option 2: Properties-if-available\r\n\r\nAt runtime React could attempt to detect if a property is present on a custom element. If the property is present React will use it, otherwise it will fallback to setting an attribute. This is the model Preact uses to deal with custom elements.\r\n\r\n**Pseudocode implementation:**\r\n\r\n```js\r\nif (propName in element) {\r\n  element[propName] = value;\r\n} else {\r\n  element.setAttribute(propName.toLowerCase(), value);\r\n}\r\n```\r\n\r\n**Possible steps:**\r\n\r\n* If an element has a defined property, React will use it.\r\n\r\n* If an element has an undefined property, and React is trying to pass it primitive data (string/number/boolean), it will use an attribute.\r\n\r\n    * Alternative: Warn and don’t set.\r\n\r\n* If an element has an undefined property, and React is trying to pass it an object/array it will set it as a property. This is because some-attr=\"[object Object]” is not useful.\r\n\r\n    * Alternative: Warn and don’t set.\r\n\r\n* If the element is being rendered on the server, and React is trying to pass it a string/number/boolean, it will use an attribute.\r\n\r\n* If the element is being rendered on the server, and React is trying to pass it a object/array, it will not do anything.\r\n\r\n### Pros\r\n\r\n#### Non-breaking change\r\n\r\nIt is possible to create a custom element that only uses attributes as its interface. This authoring style is **NOT** encouraged, but it may happen regardless. If a custom element author is relying on this behavior then this change would be non-breaking for them.\r\n\r\n### Cons\r\n\r\n#### Developers need to understand the heuristic\r\n\r\nDevelopers might be confused when React sets an attribute instead of a property depending on how they’ve chosen to load their element.\r\n\r\n#### Falling back to attributes may conflict with future globals\r\n\r\nSebastian [raised a concern](https://github.com/facebook/react/issues/10399#issuecomment-320847065) that using `in` to check for the existence of a property on a custom element might accidentally detect a property on the superclass (HTMLElement).\r\n\r\nThere are also other potential conflicts with global attributes [discussed previously](#avoids-conflict-with-future-global-attributes) in this doc.\r\n\r\n## Option 3: Differentiate properties with a sigil\r\n\r\nReact could continue setting attributes on custom elements, but provide a sigil that developers could use to explicitly set properties instead. This is similar to [the approach used by Glimmer.js](https://www.emberjs.com/blog/2017/10/10/glimmer-progress-report.html#toc_component-attributes).\r\n\r\n**Glimmer example:**\r\n\r\n```html\r\n<custom-img @src=\"corgi.jpg\" @hiResSrc=\"corgi@2x.jpg\" width=\"100%\">\r\n```\r\n\r\nIn the above example, the @ sigil indicates that `src` and `hiResSrc` should pass data to the custom element using properties, and `width` should be serialized to an attribute string.\r\n\r\nBecause React components already pass data to one another using properties, there would be no need for them to use the sigil (although it would work if they did, it would just be redundant). Instead, it would primarily be used as an explicit instruction to pass data to a custom element using JavaScript properties.\r\n\r\n*h/t to @developit of Preact for suggesting this approach :)*\r\n\r\n### Pros\r\n\r\n#### Non-breaking change that developers can opt-in to\r\n\r\nAll pre-existing React + custom element apps would continue to work exactly as they have. Developers could choose if they wanted to update their code to use the new sigil style.\r\n\r\n#### Similar to how other libraries handle attributes/properties\r\n\r\nSimilar to Glimmer, both Angular and Vue use modifiers to differentiate between attributes and properties.\r\n\r\n**Vue example:**\r\n\r\n```html\r\n<!-- Vue will serialize `foo` to an attribute string, and set `squid` using a JavaScript property -->\r\n<custom-element :foo=\"bar” :squid.prop=”ink”>\r\n```\r\n\r\n**Angular example:**\r\n\r\n```html\r\n<!-- Angular will serialize `foo` to an attribute string, and set `squid` using a JavaScript property -->\r\n<custom-element [attr.foo]=\"bar” [squid]=”ink”>\r\n```\r\n\r\n#### The system is explicit\r\n\r\nDevelopers can tell React exactly what they want instead of relying on a heuristic like the [properties-if-available](#option-2--properties-if-available) approach.\r\n\r\n### Cons\r\n\r\n#### It’s new syntax\r\n\r\nDevelopers need to be taught how to use it and it needs to be thoroughly tested to make sure it is backwards compatible.\r\n\r\n#### Not clear how server-side rendering would work\r\n\r\nShould the sigil switch to using a similarly named attribute?\r\n\r\n## Option 4: Add an attributes object\r\n\r\nReact could add additional syntax which lets authors explicitly pass data as attributes. If developers do not use this attributes object, then their data will be passed using JavaScript properties.\r\n\r\n**Example:**\r\n\r\n```jsx\r\nconst bar = 'baz';\r\nconst hello = 'World';\r\nconst width = '100%';\r\nconst ReactElement = <Test\r\n  foo={bar} // uses JavaScript property\r\n  attrs={{ hello, width }} // serialized to attributes\r\n/>;\r\n```\r\n\r\nThis idea was [originally proposed](https://gist.github.com/treshugart/2fb509a8828adf7fee5245bfa2a54ba7) by @treshugart, author of Skate.js, and is implemented in the [val](https://github.com/skatejs/val) library.\r\n\r\n### Pros\r\n\r\n#### The system is explicit\r\n\r\nDevelopers can tell React exactly what they want instead of relying on a heuristic like the [properties-if-available](#option-2--properties-if-available) approach.\r\n\r\n#### Extending syntax may also solve issues with event handling\r\n\r\n*Note: This is outside the scope of this document but maybe worth mentioning :)*\r\n\r\nIssue [#7901](https://github.com/facebook/react/issues/7901) requests that React bypass its synthetic event system when declarative event handlers are added to custom elements. Because custom element event names are arbitrary strings, it means they can be capitalized in any fashion. To bypass the synthetic event system today will also mean needing to come up with a heuristic for mapping event names from JSX to `addEventListener`.\r\n\r\n```js\r\n// should this listen for: 'foobar', 'FooBar', or 'fooBar'?\r\nonFooBar={handleFooBar}\r\n```\r\n\r\nHowever, if the syntax is extended to allow attributes it could also be extended to allow events as well:\r\n\r\n```js\r\nconst bar = 'baz';\r\nconst hello = 'World';\r\nconst SquidChanged = e => console.log('yo');\r\nconst ReactElement = <Test\r\n  foo={bar}\r\n  attrs={{ hello }}\r\n  events={{ SquidChanged}} // addEventListener('SquidChanged', …)\r\n/>;\r\n```\r\n\r\nIn this model the variable name is used as the event name. No heuristic is needed.\r\n\r\n### Cons\r\n\r\n#### It’s new syntax\r\n\r\nDevelopers need to be taught how to use it and it needs to be thoroughly tested to make sure it is backwards compatible.\r\n\r\n#### It may be a breaking change\r\n\r\nIf any components already rely on properties named `attrs` or `events`, it could break them.\r\n\r\n#### It may be a larger change than any of the previous proposals\r\n\r\nFor React 17 it may be easier to make an incremental change (like one of the previous proposals) and position this proposal as something to take under consideration for a later, bigger refactor.\r\n\r\n## Option 5: An API for consuming custom elements\r\n\r\n*This proposal was offered by @sophiebits and @gaearon from the React team*\r\n\r\nReact could create a new API for consuming custom elements that maps the element’s behavior with a configuration object.\r\n\r\n**Pseudocode example:**\r\n\r\n```js\r\nconst XFoo = ReactDOM.createCustomElementType({\r\n  element: ‘x-foo’,\r\n  ‘my-attr’: // something that tells React what to do with it\r\n  someRichDataProp: // something that tells React what to do with it\r\n});\r\n```\r\n\r\nThe above code returns a proxy component, `XFoo` that knows how to pass data to a custom element depending on the configuration you provide. You would use this proxy component in your app instead of using the custom element directly.\r\n\r\n**Example usage:**\r\n\r\n```jsx\r\n<XFoo someRichDataProp={...} />\r\n```\r\n\r\n### Pros\r\n\r\n#### The system is explicit\r\n\r\nDevelopers can tell React the exact behavior they want.\r\n\r\n#### Non-breaking change\r\n\r\nDevelopers can opt-in to using the object or continue using the current system.\r\n\r\n#### Idiomatic to React\r\n\r\nThis change doesn’t require new JSX syntax, and feels more like other APIs in React. For example, PropTypes (even though it’s being moved into its own package) has a somewhat similar approach.\r\n\r\n### Cons\r\n\r\n#### Could be a lot of work for a complex component\r\n\r\nPolymer’s [paper-input](https://www.webcomponents.org/element/PolymerElements/paper-input/elements/paper-input) element has 37 properties, so it would produce a very large config. If developers are using a lot of custom elements in their app, that may equal a lot of configs they need to write.\r\n\r\n#### May bloat bundle size\r\n\r\nRelated to the above point, each custom element class now incurs the cost of its definition + its config object size.\r\n\r\n*Note: I'm not 100% sure if this is true. Someone more familiar with the React build process could verify.*\r\n\r\n#### Config needs to keep pace with the component\r\n\r\nEvery time the component does a minor version revision that adds a new property, the config will need to be updated as well. That’s not difficult, but it does add maintenance. Maybe if configs are generated from source this is less of a burden, but that may mean needing to create a new tool to generate configs for each web component library.\r\n\r\n\r\ncc @sebmarkbage @gaearon @developit @treshugart @justinfagnani",
    reactions: {
      url: 'https://api.github.com/repos/facebook/react/issues/11347/reactions',
      total_count: 477,
      '+1': 279,
      '-1': 0,
      laugh: 0,
      hooray: 40,
      confused: 0,
      heart: 108,
      rocket: 30,
      eyes: 20,
    },
    timeline_url:
      'https://api.github.com/repos/facebook/react/issues/11347/timeline',
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: 'https://api.github.com/repos/facebook/react/issues/1739',
    repository_url: 'https://api.github.com/repos/facebook/react',
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/1739/labels{/name}',
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/1739/comments',
    events_url:
      'https://api.github.com/repos/facebook/react/issues/1739/events',
    html_url: 'https://github.com/facebook/react/issues/1739',
    id: 36379404,
    node_id: 'MDU6SXNzdWUzNjM3OTQwNA==',
    number: 1739,
    title:
      'Support asynchronous server rendering (waiting for data before rendering)',
    user: {
      login: 'fdecampredon',
      id: 864201,
      node_id: 'MDQ6VXNlcjg2NDIwMQ==',
      avatar_url: 'https://avatars.githubusercontent.com/u/864201?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/fdecampredon',
      html_url: 'https://github.com/fdecampredon',
      followers_url: 'https://api.github.com/users/fdecampredon/followers',
      following_url:
        'https://api.github.com/users/fdecampredon/following{/other_user}',
      gists_url: 'https://api.github.com/users/fdecampredon/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/fdecampredon/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/fdecampredon/subscriptions',
      organizations_url: 'https://api.github.com/users/fdecampredon/orgs',
      repos_url: 'https://api.github.com/users/fdecampredon/repos',
      events_url: 'https://api.github.com/users/fdecampredon/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/fdecampredon/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 121709921,
        node_id: 'MDU6TGFiZWwxMjE3MDk5MjE=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Feature%20Request',
        name: 'Type: Feature Request',
        color: 'c7def8',
        default: false,
        description: null,
      },
      {
        id: 710332294,
        node_id: 'MDU6TGFiZWw3MTAzMzIyOTQ=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Server%20Rendering',
        name: 'Component: Server Rendering',
        color: 'd4c5f9',
        default: false,
        description: null,
      },
      {
        id: 739777675,
        node_id: 'MDU6TGFiZWw3Mzk3Nzc2NzU=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API',
        name: 'Component: Component API',
        color: 'd4c5f9',
        default: false,
        description: null,
      },
      {
        id: 1775955521,
        node_id: 'MDU6TGFiZWwxNzc1OTU1NTIx',
        url: 'https://api.github.com/repos/facebook/react/labels/Resolution:%20Backlog',
        name: 'Resolution: Backlog',
        color: '9dd1e8',
        default: false,
        description: '',
      },
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 146,
    created_at: '2014-06-24T12:36:38Z',
    updated_at: '2022-12-26T17:06:33Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: 'It would seriously ease the process of building something isomorphic if componentWillMount could return a promise and that react would delay rendering until that promise is resolved. I have seen attempt of doing something like that in react-router and rrouter, however giving this responsibility to each component instead of a router module would make more sense for me.\n',
    reactions: {
      url: 'https://api.github.com/repos/facebook/react/issues/1739/reactions',
      total_count: 133,
      '+1': 112,
      '-1': 0,
      laugh: 11,
      hooray: 0,
      confused: 0,
      heart: 9,
      rocket: 0,
      eyes: 1,
    },
    timeline_url:
      'https://api.github.com/repos/facebook/react/issues/1739/timeline',
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: 'https://api.github.com/repos/facebook/react/issues/13206',
    repository_url: 'https://api.github.com/repos/facebook/react',
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/13206/labels{/name}',
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/13206/comments',
    events_url:
      'https://api.github.com/repos/facebook/react/issues/13206/events',
    html_url: 'https://github.com/facebook/react/issues/13206',
    id: 341142665,
    node_id: 'MDU6SXNzdWUzNDExNDI2NjU=',
    number: 13206,
    title: '[Umbrella] Releasing Suspense',
    user: {
      login: 'acdlite',
      id: 3624098,
      node_id: 'MDQ6VXNlcjM2MjQwOTg=',
      avatar_url: 'https://avatars.githubusercontent.com/u/3624098?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/acdlite',
      html_url: 'https://github.com/acdlite',
      followers_url: 'https://api.github.com/users/acdlite/followers',
      following_url:
        'https://api.github.com/users/acdlite/following{/other_user}',
      gists_url: 'https://api.github.com/users/acdlite/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/acdlite/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/acdlite/subscriptions',
      organizations_url: 'https://api.github.com/users/acdlite/orgs',
      repos_url: 'https://api.github.com/users/acdlite/repos',
      events_url: 'https://api.github.com/users/acdlite/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/acdlite/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 710615342,
        node_id: 'MDU6TGFiZWw3MTA2MTUzNDI=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Umbrella',
        name: 'Type: Umbrella',
        color: '5319e7',
        default: false,
        description: null,
      },
      {
        id: 1775958285,
        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
        name: 'React Core Team',
        color: '9149d1',
        default: false,
        description: 'Opened by a member of the React Core Team',
      },
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 119,
    created_at: '2018-07-13T20:01:03Z',
    updated_at: '2022-11-07T12:41:45Z',
    closed_at: null,
    author_association: 'COLLABORATOR',
    active_lock_reason: null,
    body: 'Let\'s use this issue to track the remaining tasks for releasing Suspense to open source.\r\n\r\n**Last updated: March 24, 2022**\r\n\r\n**Blog post: [The Plan for React 18](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html)**\r\n\r\n## Completed: React 16\r\n\r\n- [x] Release `<Suspense>` with `React.lazy` for client-side lazy loading\r\n\r\n## Completed: [React 18 Alpha](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html)\r\n\r\n- [x] Implement concurrent rendering, which is a prerequisite to everything else.\r\n- [x] Fix [fundamental flaws](https://github.com/facebook/react/pull/18796) in the concurrency model that made the behavior difficult to understand and caused many bugs.\r\n- [x] Rewrite [how React traverses the tree](https://github.com/facebook/react/pull/19261) to unblock fixing Suspense quirks.\r\n- [x] Redesign how [React integrates with the scheduler](https://github.com/facebook/react/pull/19121) to simplify the model, fix bugs, and prepare for native browser scheduling.\r\n- [x] [Fix `<Suspense>` quirks](https://github.com/reactwg/react-18/discussions/7): Previously, effects would fire inside a suspended tree too early. For example, you would see an effect from a component that\'s still hidden behind a placeholder. Now effects will run only _after_ the content has been revealed. We expect this to fix existing application code bugs.\r\n- [x] [Hiding and showing existing content should re-fire layout effects](https://github.com/reactwg/react-18/discussions/31): If a component that\'s already visible suspends, we show a placeholder, and later show it again. However, there was no way for the component to know that it was hidden or shown. For example, a tooltip component measuring its screen position would get incorrect measurements while it\'s hidden. Now we fire `useLayoutEffect` cleanup (same as `componentWillUnmount`) on "hide", and `useLayoutEffect` setup (same as `componentDidMount`) on "show". We expect this to fix existing application and library code bugs.\r\n- [x] [`<Suspense>` on the server no longer throws](https://github.com/reactwg/react-18/discussions/22): It used to be a hard error to render `<Suspense>` in a tree on the server. Now, **for the old server renderer**, it silently emits the fallback (and lets the client try to render the content instead). This shouldn\'t affect existing apps because previously it was not possible to render `<Suspense>` on the server at all.\r\n- [x] [`startTransition`](https://github.com/reactwg/react-18/discussions/41) lets you avoid hiding existing content even if it suspends again. This is useful to implement the "show old data while refetching" pattern with minimal code.\r\n- [x] Built-in throttling of Suspense reveals: To avoid updating the screen too often and causing visual jank, React "waits" a little bit before revealing the next level of spinners — in case _even more_ content is available by that time. In other words, revealing nested Suspense fallbacks is automatically throttled by React.\r\n- [x] [New Streaming Suspense Server Renderer](https://github.com/reactwg/react-18/discussions/37):\r\n    - [x] Initial streaming renderer implementation.\r\n    - [x] `React.lazy` works with SSR out of the box.\r\n    - [x] **Streaming HTML:** React uses your `<Suspense>` boundaries to stream the page HTML in visual chunks.\r\n    - [x] **Selective Hydration:** React uses your `<Suspense>` boundaries to hydrate the page in chunks, improving responsiveness.\r\n      - [x] React prioritizes hydrating the part of the page you are interacting with.\r\n      - [x] React keeps the browser responsive during hydration of `<Suspense>` boundaries.\r\n      - [x] React captures and replays missed events after hydration. \r\n- [x] [Technical preview of Server Components:](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html)\r\n  - [x] Implement the server with support for suspending. \r\n  - [x] Prototype a caching layer.\r\n  - [x] Prototype React I/O libraries like `react-fetch` and `react-pg`.\r\n  - [x] Support lazy-loaded elements for server trees.\r\n\r\n## Completed: [React 18](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html#projected-react-18-release-timeline)\r\n\r\n- [x] Finalize [New Streaming Suspense Server Renderer](https://github.com/reactwg/react-18/discussions/37):\r\n  - [x] Make it pass all of our existing tests.\r\n  - [x] Prove it out in production (currently we use a hack in its place).\r\n  - [x] Add the missing "static markup" APIs for things like emails.\r\n  - [x] Fix known bugs with hydrating Suspense.\r\n  - [x] Move the new server renderer from `react-dom/unstable-fizz` to `react-dom/server`.\r\n- [x] Fall back to client rendering from closest `<Suspense>` on mismatches instead of patching up the tree.\r\n- [x] Add `onRecoverableError` to gather production reports about SSR mismatches.\r\n\r\n### Features that may or may not appear in 18.x\r\n\r\n- [ ] `<SuspenseList>` lets you declaratively coordinate the order in which `<Suspense>` nodes inside will reveal.\r\n  - [x] Implementation.\r\n  - [ ] Server support\r\n  - [ ] Finalize and document the API.\r\n- [ ] "Backup" `<Suspense>` boundaries (not final naming): A way to specify that you\'d like React to ignore this boundary during initial render (as if it\'s not there), unless React is forced to hide existing content. We sometimes call these "ugly spinners" or "last resort spinners". This use case might seem a bit exotic but we\'ve needed it quite a few times.\r\n  - [x] Initial implementation as `unstable_avoidThisFallback`\r\n  - [x] Server support\r\n  - [ ] Pick a good name\r\n- [ ] `<Suspense>` for CPU-bound trees (not final naming): A way to tell React to immediately show a placeholder _without even trying_ to render the content. This is useful if you have an expensive tree inside. This use case is unrelated to network — it\'s about showing a spinner for some tree that takes a while to render. See https://github.com/facebook/react/pull/19936.\r\n  - [x] Initial implementation as `unstable_expectedLoadTime`\r\n  - [ ] Adjust the heuristics\r\n  - [x] Server support\r\n  - [ ] Pick a good name\r\n- [ ] An API to prioritize hydrating a particular DOM element\'s parent tree.\r\n  - [x] Implement as `ReactDOM. unstable_scheduleHydration`\r\n  - [ ] Pick a name \r\n- [ ] Reducing jank: Take another look at adjusting the small details to reduce any visual jank to the minimum. For example, throttle reveal of Suspense boundaries between siblings as well.\r\n\r\n## React 18.x (post-18.0): Suspense for Data Fetching\r\n\r\nAll of the above changes are **foundational architectural improvements** to `<Suspense>`. They fill the gaps in the mechanism and make it deeply integrated with all parts of React (client and server). However, they don\'t prescribe a particular data fetching strategy. That will likely come after the 18.0 release, and we\'re hoping that to have something during the next 18.x minor releases.\r\n\r\nThis work will include:\r\n\r\n- [ ] [React I/O libraries like `react-fetch`](https://codesandbox.io/s/sad-banach-tcnim), which is a lightweight and easiest way to fetch data with Suspense.\r\n  - [x] Initial implementation\r\n  - [ ] Finalize the API\r\n- [ ] [Built-in Suspense `<Cache>`](https://github.com/reactwg/react-18/discussions/25) which will likely be the primary recommended way for third-party data fetching libraries to integrate with Suspense. (For example, `react-fetch` uses it internally.)\r\n  - [x] Initial implementation\r\n  - [ ] Try it in production\r\n  - [ ] Investigate what\'s missing\r\n  - [ ] Figure out the recommended strategy for normalized caches\r\n- [ ] [Server Components](https://reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html), which will be the recommended way to fetch data with Suspense in a way that scales great and integrates with React Fetch as well as third-party libraries.\r\n  - [x] Initial implementation\r\n  - [x] Basic Server Context implementation\r\n  - [ ] Server Context features for refetching\r\n  - [ ] Figure out the layering between Server Components and New SSR\r\n  - [ ] (This section has many follow-up questions, so it\'s incomplete)\r\n- [ ] Clear documentation and recommendations for data fetching library authors on how to integrate with Suspense',
    reactions: {
      url: 'https://api.github.com/repos/facebook/react/issues/13206/reactions',
      total_count: 619,
      '+1': 335,
      '-1': 0,
      laugh: 39,
      hooray: 99,
      confused: 0,
      heart: 109,
      rocket: 20,
      eyes: 17,
    },
    timeline_url:
      'https://api.github.com/repos/facebook/react/issues/13206/timeline',
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: 'https://api.github.com/repos/facebook/react/issues/11503',
    repository_url: 'https://api.github.com/repos/facebook/react',
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/11503/labels{/name}',
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/11503/comments',
    events_url:
      'https://api.github.com/repos/facebook/react/issues/11503/events',
    html_url: 'https://github.com/facebook/react/issues/11503',
    id: 272615283,
    node_id: 'MDU6SXNzdWUyNzI2MTUyODM=',
    number: 11503,
    title: 'Formalize top-level ES exports',
    user: {
      login: 'gaearon',
      id: 810438,
      node_id: 'MDQ6VXNlcjgxMDQzOA==',
      avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/gaearon',
      html_url: 'https://github.com/gaearon',
      followers_url: 'https://api.github.com/users/gaearon/followers',
      following_url:
        'https://api.github.com/users/gaearon/following{/other_user}',
      gists_url: 'https://api.github.com/users/gaearon/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/gaearon/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/gaearon/subscriptions',
      organizations_url: 'https://api.github.com/users/gaearon/orgs',
      repos_url: 'https://api.github.com/users/gaearon/repos',
      events_url: 'https://api.github.com/users/gaearon/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/gaearon/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 71502270,
        node_id: 'MDU6TGFiZWw3MTUwMjI3MA==',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Build%20Infrastructure',
        name: 'Component: Build Infrastructure',
        color: 'f9d0c4',
        default: false,
        description: null,
      },
      {
        id: 710375792,
        node_id: 'MDU6TGFiZWw3MTAzNzU3OTI=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Discussion',
        name: 'Type: Discussion',
        color: 'fef2c0',
        default: false,
        description: null,
      },
      {
        id: 763742499,
        node_id: 'MDU6TGFiZWw3NjM3NDI0OTk=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Breaking%20Change',
        name: 'Type: Breaking Change',
        color: 'aa2608',
        default: false,
        description: null,
      },
      {
        id: 1775958285,
        node_id: 'MDU6TGFiZWwxNzc1OTU4Mjg1',
        url: 'https://api.github.com/repos/facebook/react/labels/React%20Core%20Team',
        name: 'React Core Team',
        color: '9149d1',
        default: false,
        description: 'Opened by a member of the React Core Team',
      },
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 119,
    created_at: '2017-11-09T15:56:42Z',
    updated_at: '2023-08-10T08:01:46Z',
    closed_at: null,
    author_association: 'CONTRIBUTOR',
    active_lock_reason: null,
    body: "Currently we only ship CommonJS versions of all packages. However we might want to ship them as ESM in the future (https://github.com/facebook/react/issues/10021).\r\n\r\nWe can't quite easily do this because we haven't really decided on what top-level ES exports would look like from each package. For example, does `react` have a bunch of named exports, but also a default export called `React`? Should we encourage people to `import *` for better tree shaking? What about `react-test-renderer/shallow` that currently exports a class (and thus would start failing in Node were it converted to be a default export)?",
    reactions: {
      url: 'https://api.github.com/repos/facebook/react/issues/11503/reactions',
      total_count: 202,
      '+1': 175,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 25,
      rocket: 0,
      eyes: 2,
    },
    timeline_url:
      'https://api.github.com/repos/facebook/react/issues/11503/timeline',
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: 'https://api.github.com/repos/facebook/react/issues/11387',
    repository_url: 'https://api.github.com/repos/facebook/react',
    labels_url:
      'https://api.github.com/repos/facebook/react/issues/11387/labels{/name}',
    comments_url:
      'https://api.github.com/repos/facebook/react/issues/11387/comments',
    events_url:
      'https://api.github.com/repos/facebook/react/issues/11387/events',
    html_url: 'https://github.com/facebook/react/issues/11387',
    id: 269148824,
    node_id: 'MDU6SXNzdWUyNjkxNDg4MjQ=',
    number: 11387,
    title:
      'createPortal: support option to stop propagation of events in React tree',
    user: {
      login: 'kib357',
      id: 347668,
      node_id: 'MDQ6VXNlcjM0NzY2OA==',
      avatar_url: 'https://avatars.githubusercontent.com/u/347668?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/kib357',
      html_url: 'https://github.com/kib357',
      followers_url: 'https://api.github.com/users/kib357/followers',
      following_url:
        'https://api.github.com/users/kib357/following{/other_user}',
      gists_url: 'https://api.github.com/users/kib357/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/kib357/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/kib357/subscriptions',
      organizations_url: 'https://api.github.com/users/kib357/orgs',
      repos_url: 'https://api.github.com/users/kib357/repos',
      events_url: 'https://api.github.com/users/kib357/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/kib357/received_events',
      type: 'User',
      site_admin: false,
    },
    labels: [
      {
        id: 121709921,
        node_id: 'MDU6TGFiZWwxMjE3MDk5MjE=',
        url: 'https://api.github.com/repos/facebook/react/labels/Type:%20Feature%20Request',
        name: 'Type: Feature Request',
        color: 'c7def8',
        default: false,
        description: null,
      },
      {
        id: 127893911,
        node_id: 'MDU6TGFiZWwxMjc4OTM5MTE=',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20DOM',
        name: 'Component: DOM',
        color: 'fef2c0',
        default: false,
        description: null,
      },
    ],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 118,
    created_at: '2017-10-27T15:36:49Z',
    updated_at: '2023-06-13T20:05:04Z',
    closed_at: null,
    author_association: 'NONE',
    active_lock_reason: null,
    body: "**Do you want to request a *feature* or report a *bug*?**\r\nFeature, but also a bug cause new API breaks old `unstable_rendersubtreeintocontainer`\r\n\r\n**What is the current behavior?**\r\nWe cannot stop all events propagation from portal to its React tree ancestors. Our layers mechanism with modals/popovers completely broken. For example, we have a dropdown button. When we click on it, click opens popover. We also want to close this popover when clicking on same button. With createPortal, click inside popover fires click on button, and it's closing. We can use stopPropagation in this simple case. But we have tons of such cases, and we need use stopPropagation for all of them. Also, we cannot stop all events.\r\n\r\n**What is the expected behavior?**\r\ncreatePortal should have an option to stop synthetic events propagation through React tree without manually stopping every event. What do you think?\r\n",
    reactions: {
      url: 'https://api.github.com/repos/facebook/react/issues/11387/reactions',
      total_count: 198,
      '+1': 198,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      'https://api.github.com/repos/facebook/react/issues/11387/timeline',
    performed_via_github_app: null,
    state_reason: null,
  },
];
