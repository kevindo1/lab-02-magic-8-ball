# Alchemy Bootstrap Template

## Magic 8 Ball

### HTML 
* Input text for user to ask the question (static)
* Submit button (static)
* Paragraph that holds the answer (dynamic)

### DOM
* input-text
* submit-button
* answer-paragraph

### State
* The random answer generated

### Events
* Button clicked
    * Random index generated (randomIndex)
    * Value of the answer is compared to the array 
    * The answer will be shown on the page (text.content)