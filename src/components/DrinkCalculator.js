import React from 'react'
import { Image, Button, Menu, Popup, Input, Card, Feed, Grid, Form} from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DrinkCalculator extends React.Component {
  constructor() {
    super()
    this.state = {
      activeItem: '',
      measurementForm: false,
      searchTermWord: '',
      drinksArr: null,
      drinksNames: null,
      clickedItem: null,
      addedItems: [],
      caloriesArr: [],
      fatsArr: [],
      carbsArr: [],
      sugarsArr: [],
      totalCalories: '',
      totalCarbs: '',
      totalFats: '',
      totalSugars: ''
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // handleChange = (e) => {
  //   let searchedWord = e.target.value.toLowerCase()
  //   console.log(e.target.value)
  //   this.setState({
  //     searchTermWord: searchedWord
  //   })
  // }

  resetComponent = () => {
    this.setState({
      isLoading: false,
      drinksNames: null,
      searchTermWord: ''
    })
}

  getSearchTerm = (e) => {
    let searchedWord = e.target.value.toLowerCase()
    fetch(`https://api.nutritionix.com/v1_1/search/${e.target.value.toLowerCase()}?results=0%3A20&cal_min=50&cal_max=100&fields=item_name%2Cbrand_name%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein%2Cnf_calories%2Cnf_total_fat%2Citem_id%2Cbrand_id&appId=a8f79d5d&appKey=ad063534d80beb7b73e61da6a526265b`)
    .then(response => response.json())
    .then(json => {
      let results = json["hits"].map(results => results.fields)
      let names = results.map(drink => drink.item_name)
      this.setState({
        drinksArr: results,
        drinksNames: names,
        searchedTermWord: searchedWord
      })
    })
  }

  displayDrinkInfo = (drink) => {
    this.setState({
      clickedItem: drink,
      drinksArr: null
    })
  }

  addItem = (itemObj) => {
      this.setState({
        addedItems: [...this.state.addedItems, itemObj]
      })
  }

  clearClickedItem = () => {
    this.setState({
      clickedItem: null
  })
  }

  removeItemFromList = (itemObj) => {
    let afterDelete = this.state.addedItems.filter(item => item.id != itemObj.id)
    this.setState({
      addedItems: afterDelete
    })
  }

  addOneMore = (itemObj) => {
    this.setState({
      addedItems: [...this.state.addedItems, itemObj]
    })
  }

  addMacrosAddedItemArray = (e, itemObj) => {
    let numberAdded = e.target.value
    let totalCalories;
    e.target.value != "" ? totalCalories = this.state.addedItems.map(item => item.nf_calories).reduce((a, b) => a + b) * numberAdded : totalCalories = 0
    let totalCarbs;
    e.target.value != "" ? totalCarbs = this.state.addedItems.map(item => item.nf_total_carbohydrate).reduce((a, b) => a + b) * numberAdded : totalCarbs = 0
    let totalFats;
    e.target.value != "" ? totalFats = this.state.addedItems.map(item => item.nf_total_fat).reduce((a, b) => a + b) * numberAdded : totalFats = 0
    let totalSugars;
    e.target.value != "" ? totalSugars = this.state.addedItems.map(item => item.nf_sugars).reduce((a, b) => a + b) * numberAdded : totalSugars = 0
    this.setState({
      caloriesArr: [...this.state.caloriesArr, totalCalories],
      fatsArr: [...this.state.fatsArr, totalFats],
      carbsArr: [...this.state.carbsArr, totalCarbs],
      sugarsArr: [...this.state.sugarsArr, totalSugars]
    }, () => this.addArrOfMacros())
  }

  addArrOfMacros = () => {
    this.setState({
      totalCalories: this.state.caloriesArr.reduce((a, b) => a + b),
      totalCarbs: this.state.carbsArr.reduce((a, b) => a + b),
      totalFats: this.state.fatsArr.reduce((a, b) => a + b),
      totalSugars: this.state.sugarsArr.reduce((a, b) => a + b)
    })
  }

  deleteLastArrVal = (e) => {
    if(e.key === "Backspace"){
      this.setState({
        caloriesArr: this.state.caloriesArr.pop()
      })
    }
  }

  render(){

    const { activeItem } = this.state
    let number = 1

    return(
      <React.Fragment>
        <div style={{minHeight: "100vh"}}>
        <div id='header-site'>
          <div id="profile-image-container">
            <Image id="profile-pic" src='data:image/png;base64,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' size='small' circular />
          </div>

          <Menu secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={(e, name) => {this.handleItemClick(e, name); this.props.history.push('/profile')}} />
            <Menu.Item name='measurements' active={activeItem === 'measurements'} onClick={(e, name) => {this.handleItemClick(e, name); this.props.history.push('/measurements')}}/>
            <Menu.Item name='guilt calculator' active={activeItem === 'guilt calculator'} onClick={(e, name) => {this.handleItemClick(e, name); this.props.history.push('/drink-calculator')}}/>
          </Menu>
          </div>
            <h4 id="message-drink-calculator">Here again, {this.props.user.first_name}?... Let's find out how many bad calories you have consumed and how much exercise you need to do to burn those calories. I just wish I didn't have to do this again, you know?</h4>
            <Input placeholder='Search Item...' onChange={this.getSearchTerm}/>
          <div>

          <div id="search-results">
          <Menu vertical style={{margin:"0 auto"}}>
            {this.state.drinksArr ? this.state.drinksArr.map(drink =>
              <Menu.Item onClick={() => this.displayDrinkInfo(drink)} style={{margin: "0 auto"}}>
                {drink.item_name} - {drink.brand_name}
              </Menu.Item>
            ) : null}
          </Menu>
          </div>


          {this.state.clickedItem != null ?
            <div id="individual-show-item">
                 <h4>{this.state.clickedItem.item_name}</h4>
                 <p>Calories: {this.state.clickedItem.nf_calories}</p>
                 <p>Carbs: {this.state.clickedItem.nf_total_carbohydrate}</p>
                 <p>Fats: {this.state.clickedItem.nf_total_fat}</p>
                 <p>Sugars: {this.state.clickedItem.nf_sugars}</p>
                 <Button size="mini" onClick={() => this.addItem(this.state.clickedItem)} basic color='green'>
                   Add
                 </Button>
                 <Button size="mini" onClick={this.clearClickedItem} basic color='red'>
                   Cancel
                 </Button>
            </div>
          : null}


          <div id="added-items-container">
            <h3>Your Added Items</h3>
            <Grid divided='vertically' id="macros-row" >
              <Grid.Row columns={7}>
                <Grid.Column>
                  <h4>#</h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>Name</h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>Kcal</h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>Carbs</h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>Fats</h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>Sugars</h4>
                </Grid.Column>
                <Grid.Column>
                  <h4>Delete</h4>
                </Grid.Column>
              </Grid.Row>


          {this.state.addedItems != [] ? this.state.addedItems.map(item =>
              <Grid.Row columns={7}>
                <Grid.Column>
                <div class="ui transparent input">
                  <input type="text" maxLength="2" placeholder="Qty." onChange={(e, item) => this.addMacrosAddedItemArray(e, item)} onKeyDown={this.deleteLastArrVal}/>
                </div>
                </Grid.Column>
                <Grid.Column>
                  <p>{item.item_name}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{item.nf_calories}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{item.nf_total_carbohydrate}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{item.nf_total_fat}</p>
                </Grid.Column>
                <Grid.Column>
                  <p>{item.nf_sugars ? item.nf_sugars : "-"}</p>
                </Grid.Column>
                <Grid.Column id="add-substract-delete">
                  {<FontAwesomeIcon id="delete-item" onClick={() => this.removeItemFromList(item)} icon="trash" size="1x"/>}
                </Grid.Column>
              </Grid.Row>) : null }
          </Grid>
        </div>

      </div>
      </div>
      </React.Fragment>
    )
  }
}

export default DrinkCalculator
