import { EXAMPLES } from "../data-with-examples";
import TabButton from "./TabButton";
import { useState } from 'react';
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      <div id="tab-content">
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </div>
    </Section>
  );
}
