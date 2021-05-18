# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A stateful component implements logic and state while functional components accept data and display them in a form, renders UI.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
ComponentWillMount is invoked immediately before mounting occurs. ComponentWillUpdate gives you control to manipulate components before receiving new props or state.

3. Define stateful logic.
It is any code that uses state, but in the case of hooks I would define it as a behavior created with the use of one or more hooks. It's like a perk that you're adding to a component

4. What are the three step of creating a successful test? What is done in each phase?
Mounting - the render method is invoked, componentDidMount gets called as well.
Growth/Updating - setState is used to change the component's state data, forcing a call to render, shouldComponentUpdate is used to stop a component from calling render if necessary.
Death/Unmounting - component is removed from the screen, componentWillUnmount is called and can be used for any clean up you may need to do.