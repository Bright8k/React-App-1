import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */

const initialMenuItems = [];

export default function Sidebar() {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [newMenuItem, setNewMenuItem] = useState("");
  const [filter, setFilter] = useState("");

  const addMenuItem = useCallback(() => {
    console.log("Added menu item");
    setMenuItems(prevMenuItems => [newMenuItem, ...prevMenuItems]);
    setNewMenuItem("");
  }, [newMenuItem]);

  const filteredMenuItems = menuItems.filter(item => item.includes(filter));

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.


  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          addMenuItem();
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      <ul>
        {menuItems
          .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  )
}
