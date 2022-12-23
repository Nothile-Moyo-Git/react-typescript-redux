# React TypeScript Redux application

## This app was designed to be practise in creating a redux store, then using context, and then using a custom hook in order to create a custom store

### Installation & Deployment
To start the app, download it and run `npm install` and then `npm audit fix` to help fix dependency issues.

This app is deployed to Github pages and can be found here: `https://nothile-moyo-git.github.io/react-typescript-redux/`.

To deploy the app, run `npm run deploy`. This run create a new build in pre-deploy and then deploy it to Github Pages

### Explanation of App
This app is a favourites list. Similar to a to-do app. Users can click on products that they like and it adds them to a favourites list.

It initially did this by creating a redux store, then I moved it over to useContext and now it uses a custom hook. The custom hook initialises itself and adds objects to the globalState variable which is defined once and passed through to the highest level component.

It then binds a method to update state to it and updates the list of favourites to pass through to the component.

For styling, I used SCSS with BEM methodology and also used react-icons and react-parallax-tilt for the interpolating cards with glare effect.

I also optimized many of these effects by avoiding re-painting and instead using a pseudo-element and transforming it

The custom hook is found in /app/components/hooks-store/store.ts

I also wanted to start using TypeScript in my projects as I use it on my current job and it makes the debugging process much easier once the code has been written. It substantially reduces errors.

### Tools and frameworks
React.js - 18
react-burger-menu
react-icons ( icons are MIT licensed if referenced properly )
SASS
Typescript
react-router
react-parallax-tilt

### Overall thoughts
I enjoyed building this app. It wasn't designed to be very complex as I've made plenty of apps with api calls and async JavaScript already.

The concepts around global state management can definitely be complex and difficult to understand, but truly worth it.

I also learned about when to best use Redux or useContext.

For styling, I wanted to make a tilting card with glare effect, and found the react package react-parallax-tilt that interpolates elements for you and incoorperates the glare effect. I also use my established gradient. 

For the menu, I use react-burger-menu as it has a really cool slide-out feature.

Implementing TypeScript was also a lot easier since I use it at work and I've been learning about webpack.

So yeah, definitely a challenge but absolutely worth doing :).

I think the next app will finally be unit testing!

### Disclaimers
The icons used on this site can be found in react-icons. All credit goes to the wonderful authors who created the assets.

You can find the link for their package here: `https://react-icons.github.io/react-icons`