# React.js Learning

## React.Js installation:
- **Step-01**:
  - `npx create-react-app text-utils`
  - `cd text-utils`
  - `npm start`
- **Alternative step**:
  - `npx create-react-app text-utils .`


## 1. Function Based Component (Text Utils)
1. React Basic- Video: [01-15](https://www.youtube.com/watch?v=-mJFZp84TIY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=1), [19-21](https://www.youtube.com/watch?v=kEvfVw5Sq5c&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=19)
2. [React Router](https://v5.reactrouter.com/web/guides/quick-start) - [Video: 16](https://www.youtube.com/watch?v=WNU1BEZIjxg&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=16),
3. React Deploy in Git Repo (Free Hosting): [Video: 17](https://www.youtube.com/watch?v=Fi75tq9JikI&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=17)
   - Need to remove Routing, as github pages not support routing.
   - https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
   - https://www.npmjs.com/package/gh-pages
4. React real Hosting: [Video 18](https://www.youtube.com/watch?v=YYVY1bPHaWE&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=18)

## 2. Class based Component: (News API)
1. React Basic - [Video 22-28](https://www.youtube.com/watch?v=x9p-4QGh-OI&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=22)
2. React Advance (router + Modify project) - [Video 29-33](https://www.youtube.com/watch?v=sUGwamqnJnY&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=29)

## 3. Component Life Cycle:
1. React LifeCycle: [Video 34](https://www.youtube.com/watch?v=abjeWy4sZiU&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=34)
2. [View React LifeCycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- React Component LifeCycle:
   - **Mounting** - Birth of your component
   - **Update** - Growth of your component
   - **Unmount** - Death of your component
- Method in React COmponent Lifecycle
   - **render( )**: used to render HTML of the component in react. Can't modify state.
   - **componentDidMount( )**: method runs after the component output has been rendered to the DOM
   - **componentDidUpdate( )**: method is invoke as soon as the updating happens. Will update if props or state is change
   - **componentWillUnmount( )**: called just before the component is unmounted and destroyed.

## 4. Class based Component:
1. Update component: 
      - **infinite-scroll**: [Video 35](https://www.youtube.com/watch?v=yLox5lhwaEU&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=35) : react-infinite-scroll-component
      - **Top-loading-bar**: [Video 36](https://www.youtube.com/watch?v=j_Gk58cOB2A&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=36) : react-top-loading-bar
      - **React Custom Envs**: [Video 37](https://www.youtube.com/watch?v=fg_Rc5cBAK8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=37) : .env.local config

## 5. React Hooks: - [Video 38](https://www.youtube.com/watch?v=esrFnNV5Btc&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=38)
- Features of Class based components in function based components
- It allows you to use state and other React features without writing a class
- Hooks are the function which "hoot into" React state and lifecycle features from function components.
- Commonly used React Hooks:
  - **useState**: update state and initialize value of state. Use multiple time to update state.
  - **useEffect**: Perform side effect of Component Update. When updating any Component then if we want to change anything (like: alert, update some text etc.), we can do that with useEffect.
  - **useContext**: When need to pass any data (props) for nested Component Tree childs, then useContext used to available globally that data.
  - **useRef**: Return a mutable reference object. It's basically a holder, which carry any DOM element.

## 6. Change React Class to React Function
  - [Video 39-40](https://www.youtube.com/watch?v=aSSVGdVk6fo&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=39)

### Difference of Class Based Component, Class based Component

