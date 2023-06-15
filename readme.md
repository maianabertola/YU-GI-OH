# Yu-Gi-Oh Project

This website project is based on the Yu-Gi-Oh universe. It was developed as part of the second project during the web development bootcamp at Ironhack. The project was completed in pairs, with each team consisting of two students.

The main objective of this project was to apply our recently acquired skills in React and Axios. We were tasked with choosing an API from which we could fetch data and display it on a React website.

## Architecture

1. Homepage: Inspired by the official Yu-Gi-Oh homepage, it provides links to the main sections of the website.
2. Collection Page: Allows users to discover Yu-Gi-Oh monster and magic cards. Users can also use the search bar to filter their search.
3. Create Your Card Page: A form that allows users to create custom Yu-Gi-Oh cards. The created cards will be displayed on the collection page.
4. About Page: A page that pays homage to the Yu-Gi-Oh universe.

## Development Process and Project Management

- The project was started on May 10, 2023, in collaboration with my classmate Fabien.
- We began by creating an MVP design of the website using Figma. The design was mainly inspired by the official Yu-Gi-Oh website, as we aimed to maintain the brand colors.
- After finalizing the design, we identified the necessary pages and components and divided the tasks accordingly.
- In parallel, we created a small collection of cards on Postman.
- To ensure efficient project management, we held daily meetings to merge our work and update our shared to-do list on Notion.

## Design Considerations

- Once the main functionalities were implemented, we focused on enhancing the visual appeal of the website through CSS styling.
- We made a conscious effort to incorporate design elements from the Yu-Gi-Oh universe, including dark colors and game-related images.

## Code I'm Proud Of

Scroll down to a specific section of the page

```
 function scrollToSection() {
    callOut.current.scrollIntoView();
    console.log(callOut.current);
  }

     <HeroSectionVideo theFunction={scrollToSection} />
      <section>
        <div ref={callOut}>
          <Callout
            title={"One website, all your cards"}
            text={
              "Explore the complete collection of Yu-Gi-Oh cards and build your ultimate deck today!"
            }
            cta={"Get them all"}
            img={duel}
            color={"blue"}
            url={navToAllCards}
          />
```

Used Outlet and lifted the UseState to create Yu-Gi-Oh card

````
function Form() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(0);
  const [attribute, setAttribute] = useState("");
  const [race, setRace] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [type, setType] = useState("")
  const [description, setDescription] = useState("");
  const [imageForm, setImageForm] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  function changePage(event) {
    event.preventDefault();
    setShow(!show);
    navigate("name");
  }

  function handleName() {
    navigate("level");
  }

  function handleLevel() {
    navigate("race");
  }

  function handleRace() {
    navigate("attribute");
  }

  function handleAttribute() {
    navigate("attack");
  }

  function handleAttack() {
    navigate("defense");
  }

  function handleDefense() {
    navigate("type");
  }

  function handleType() {
    navigate("description")
  }

  function handleDescription() {
    navigate("image-monster");
  }

  async function handleSubmit(event) {
    // console.log("toti");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ironrest.fly.dev/api/yu-gi-oh",
        {
          name: name,
          level: level,
          attribute: attribute,
          race: race,
          atk: attack,
          def: defense,
          type: type,
          desc: description,
          card_images: [{image_url: imageForm}],
        }
      );
      console.log("response", response);
      navigate("your-monster-is-created");
    } catch (error) {
      console.log("BUG DATA:", error);
    }
  }
  if (show) {
    return (
      <>
        <div className="formContainer">
          <div className="imageContainer">
            <img
              src={groupArtwork}
              alt="yumi and friends"
              className="imgForm"
            ></img>
          </div>

          <div className="textFormContainer">
            <h1 className="titleForm">Free your creative spirit</h1>
            <article>
              Create your custom Duel Monster to take on any duel and face the
              toughest opponents.
            </article>
            <Button cta={"Start"} onClick={changePage}></Button>
          </div>
        </div>
      </>
    );
  }
  return (
    <Outlet
      context={{
        name: [name, setName, handleName],
        level: [level, setLevel, handleLevel],
        attribute: [attribute, setAttribute, handleAttribute],
        race: [race, setRace, handleRace],
        attack: [attack, setAttack, handleAttack],
        defense: [defense, setDefense, handleDefense],
        type: [type, setType, handleType],
        description: [description, setDescription, handleDescription],
        image: [imageForm, setImageForm, handleSubmit],
      }}
    />
  );
}
    ```


## Mistakes

- One of the significant challenges we faced was with class naming. When someone needed to work on another person's component, it was sometimes difficult to understand and locate the specific component.

## Installation

To run this project locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the necessary dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and visit http://localhost:3000 to view the website.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.

Feel free to explore and enjoy the Yu-Gi-Oh project website!"
````
