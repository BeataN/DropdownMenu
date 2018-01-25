import React from "react";

const DropdownMenu = props => {
  const handleElementSelected = (event, content) => {
    event.stopPropagation();

    props.onElementSelected(content);
  };

  return (
    <div className="menu-wrap">
      <ul className="menu">
        {props.menuData.map(parent => {
          return (
            <li className="parent" key={parent.key}>
              {parent.label}
              <ul>
                {parent.child.map(child => {
                  return (
                    <li
                      onClick={event =>
                        handleElementSelected(event, child.content)
                      }
                      className="child"
                      key={child.key}
                    >
                      {child.label}
                      {child.child && (
                        <ul>
                          {child.child.map(grandchild => {
                            return (
                              <li
                                onClick={event =>
                                  handleElementSelected(
                                    event,
                                    grandchild.content
                                  )
                                }
                                className="grandchild"
                                key={grandchild.key}
                              >
                                {grandchild.label}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
