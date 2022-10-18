import {Component} from 'react'

import {
  MainContainer,
  Heading,
  InputImage,
  LabelElement,
  SelectElement,
  Button,
  Form,
  Card,
  Para,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imgUrlInput: '',
    bottomValueInput: '',
    topValueInput: '',
    fontValueInput: '',
    imgUrl: '',
    bottomValue: '',
    topValue: '',
    fontValue: '',
  }

  submitButton = event => {
    event.preventDefault()
    const {
      imgUrlInput,
      bottomValueInput,
      topValueInput,
      fontValueInput,
    } = this.state
    this.setState({imgUrl: imgUrlInput})
    this.setState({bottomValue: bottomValueInput})
    this.setState({topValue: topValueInput})
    this.setState({fontValue: fontValueInput})
  }

  onClickFontSize = event => {
    this.setState({fontValueInput: event.target.value})
  }

  clickImage = event => {
    this.setState({imgUrlInput: event.target.value})
  }

  clickTopText = event => {
    this.setState({topValueInput: event.target.value})
    console.log(event.target.value)
  }

  clickBottomText = event => {
    this.setState({bottomValueInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {bottomValue, topValue, imgUrl, fontValue} = this.state
    console.log(bottomValue, topValue)
    return (
      <MainContainer>
        <Form onSubmit={this.submitButton}>
          <Heading>Meme Generator</Heading>
          <LabelElement htmlFor="img">Image Url</LabelElement>
          <InputImage
            type="text"
            id="img"
            placeholder="Enter the Image URL"
            onChange={this.clickImage}
          />
          <LabelElement htmlFor="top">Top Text</LabelElement>
          <InputImage
            type="text"
            id="top"
            placeholder="Enter the Top Text"
            onChange={this.clickTopText}
          />
          <LabelElement htmlFor="text-b">Bottom Text</LabelElement>
          <InputImage
            type="text"
            id="text-b"
            placeholder="Enter the Bottom Text"
            onChange={this.clickBottomText}
          />
          <LabelElement htmlFor="fontSize">Font Size</LabelElement>
          <SelectElement id="fontSize" onChange={this.onClickFontSize}>
            {fontSizesOptionsList.map(e => (
              <option key={e.optionId}>{e.displayText}</option>
            ))}
          </SelectElement>
          <Button type="submit">Generate</Button>
        </Form>
        <Card img={imgUrl} data-testid="meme">
          <Para font={fontValue}>{topValue}</Para>
          <Para font={fontValue}>{bottomValue}</Para>
        </Card>
      </MainContainer>
    )
  }
}

export default MemeGenerator
