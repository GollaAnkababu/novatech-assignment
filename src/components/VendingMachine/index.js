import {Component} from 'react'

import './index.css'

const options = [
  {
    id: 'Strong Coffee',
    displayText: 'Strong Coffee',
  },
  {
    id: 'Light Coffee',
    displayText: 'Light Coffee',
  },
  {
    id: 'Strong Tea',
    displayText: 'Strong Tea',
  },
  {
    id: 'Light Tea',
    displayText: 'Light Tea',
  },
]

class VendingMachine extends Component {
  state = {
    teaLeaves: '',
    coffeePowder: '',
    sugar: '',
    milk: '',
    water: '',
    selectionOption: options[0].id,
    itemQuantity: 0,
    isSugar: false,
    initialTeaLeaves: 500,
    initialCoffeePowder: 500,
    initialSugar: 600,
    initialMilk: 8000,
    initialWater: 15000,
    consumedTeaLeaves: 0,
    consumedCoffeePowder: 0,
    consumedSugar: 0,
    consumedMilk: 0,
    consumedWater: 0,
    leakedMilk: 0,
    leakedWater: 0,
    selledStrongCoffee: 0,
    selledLightCoffee: 0,
    selledStrongTea: 0,
    selledLightTea: 0,
    totalPrice: 0,
    sellingPrice: 0,
    maxCups: 150,
  }

  changeQuantity = event => {
    this.setState({
      itemQuantity: event.target.value,
    })
  }

  resetMachine = () => {
    this.setState({
      selectionOption: options[0].id,
      itemQuantity: 0,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {selectionOption, itemQuantity, isSugar} = this.state

    const sugaradd = isSugar ? 1 : 0

    if (itemQuantity >= 1) {
      if (selectionOption === 'Strong Coffee') {
        const sug = 2 * 1.5
        const mil = 50 * 0.15
        const pow = 4 * 2
        const wate = 100 * 0.02

        const ans = sug * sugaradd + mil + pow + wate

        const final = itemQuantity * ans
        const finalpricePerItem = itemQuantity * 17.5
        const sugQ = 2 * itemQuantity
        const milkQ = 50 * itemQuantity
        const waterQ = 100 * itemQuantity
        const powQ = 4 * itemQuantity

        const milkLoss = 0.05 * milkQ

        const waterLoss = 0.05 * waterQ

        this.setState(prevState => ({
          initialTeaLeaves: prevState.initialTeaLeaves,
          initialCoffeePowder: prevState.initialCoffeePowder - powQ,
          initialSugar: prevState.initialSugar - sugQ,
          initialMilk: prevState.initialMilk - milkQ,
          initialWater: prevState.initialWater - waterQ,
          consumedTeaLeaves: prevState.consumedTeaLeaves,
          consumedCoffeePowder: prevState.consumedCoffeePowder + powQ,
          consumedSugar: prevState.consumedSugar + sugQ,
          consumedMilk: prevState.consumedMilk + milkQ,
          consumedWater: prevState.consumedWater + waterQ,
          selledStrongCoffee:
            parseInt(prevState.selledStrongCoffee, 10) +
            parseInt(itemQuantity, 10),
          leakedMilk: prevState.leakedMilk + milkLoss,
          leakedWater: prevState.leakedWater + waterLoss,
          totalPrice: prevState.totalPrice + final,
          sellingPrice: prevState.sellingPrice + finalpricePerItem,
        }))

        // console.log(price)
      } else if (selectionOption === 'Light Coffee') {
        const sug = 1.5 * 1.5
        const mil = 60 * 0.15
        const pow = 2 * 2
        const wate = 100 * 0.02

        const ans = sug * sugaradd + mil + pow + wate

        const final = itemQuantity * ans
        //  price = final

        const sugQ = 2 * itemQuantity
        const milkQ = 50 * itemQuantity
        const waterQ = 100 * itemQuantity
        const powQ = 4 * itemQuantity

        const milkLoss = 0.05 * milkQ

        const waterLoss = 0.05 * waterQ
        const finalpricePerItem = itemQuantity * 16.5

        this.setState(prevState => ({
          initialTeaLeaves: prevState.initialTeaLeaves,
          initialCoffeePowder: prevState.initialCoffeePowder - powQ,
          initialSugar: prevState.initialSugar - sugQ,
          initialMilk: prevState.initialMilk - milkQ,
          initialWater: prevState.initialWater - waterQ,
          consumedTeaLeaves: prevState.consumedTeaLeaves,
          consumedCoffeePowder: prevState.consumedCoffeePowder + powQ,
          consumedSugar: prevState.consumedSugar + sugQ,
          consumedMilk: prevState.consumedMilk + milkQ,
          consumedWater: prevState.consumedWater + waterQ,
          selledLightCoffee:
            parseInt(prevState.selledLightCoffee, 10) +
            parseInt(itemQuantity, 10),
          leakedMilk: prevState.leakedMilk + milkLoss,
          leakedWater: prevState.leakedWater + waterLoss,
          totalPrice: prevState.totalPrice + final,
          sellingPrice: prevState.sellingPrice + finalpricePerItem,
        }))
      } else if (selectionOption === 'Strong Tea') {
        const sug = 2 * 1.5
        const mil = 30 * 0.15
        const pow = 0 * 2
        const wate = 150 * 0.02
        const tea = 4 * 1

        const ans = sug * sugaradd + mil + pow + wate + tea

        const final = itemQuantity * ans
        //  price = final

        const sugQ = 2 * itemQuantity
        const milkQ = 30 * itemQuantity
        const waterQ = 150 * itemQuantity
        const powQ = 0 * itemQuantity
        const teaQ = 4 * itemQuantity
        const milkLoss = 0.05 * milkQ

        const waterLoss = 0.05 * waterQ
        const finalpricePerItem = itemQuantity * 15.5

        this.setState(prevState => ({
          initialTeaLeaves: prevState.initialTeaLeaves - teaQ,
          initialCoffeePowder: prevState.initialCoffeePowder - powQ,
          initialSugar: prevState.initialSugar - sugQ,
          initialMilk: prevState.initialMilk - milkQ,
          initialWater: prevState.initialWater - waterQ,
          consumedTeaLeaves: prevState.consumedTeaLeaves + teaQ,
          consumedCoffeePowder: prevState.consumedCoffeePowder + powQ,
          consumedSugar: prevState.consumedSugar + sugQ,
          consumedMilk: prevState.consumedMilk + milkQ,
          consumedWater: prevState.consumedWater + waterQ,
          selledStrongTea:
            parseInt(prevState.selledStrongTea, 10) +
            parseInt(itemQuantity, 10),
          leakedMilk: prevState.leakedMilk + milkLoss,
          leakedWater: prevState.leakedWater + waterLoss,
          totalPrice: prevState.totalPrice + final,
          sellingPrice: prevState.sellingPrice + finalpricePerItem,
        }))
      } else if (selectionOption === 'Light Tea') {
        const sug = 1.5 * 1.5
        const mil = 40 * 0.15
        const pow = 0 * 2
        const wate = 150 * 0.02
        const tea = 3 * 1

        const ans = sug * sugaradd + mil + pow + wate + tea

        const final = itemQuantity * ans
        //  price = final

        const sugQ = 1.5 * itemQuantity
        const milkQ = 40 * itemQuantity
        const waterQ = 150 * itemQuantity
        const powQ = 0 * itemQuantity
        const teaQ = 3 * itemQuantity

        const milkLoss = 0.05 * milkQ

        const waterLoss = 0.05 * waterQ
        const finalpricePerItem = itemQuantity * 15

        this.setState(prevState => ({
          initialTeaLeaves: prevState.initialTeaLeaves - teaQ,
          initialCoffeePowder: prevState.initialCoffeePowder - powQ,
          initialSugar: prevState.initialSugar - sugQ,
          initialMilk: prevState.initialMilk - milkQ,
          initialWater: prevState.initialWater - waterQ,
          consumedTeaLeaves: prevState.consumedTeaLeaves + teaQ,
          consumedCoffeePowder: prevState.consumedCoffeePowder + powQ,
          consumedSugar: prevState.consumedSugar + sugQ,
          consumedMilk: prevState.consumedMilk + milkQ,
          consumedWater: prevState.consumedWater + waterQ,
          selledLightTea:
            parseInt(prevState.selledLightTea, 10) + parseInt(itemQuantity, 10),
          leakedMilk: prevState.leakedMilk + milkLoss,
          leakedWater: prevState.leakedWater + waterLoss,
          totalPrice: prevState.totalPrice + final,
          sellingPrice: prevState.sellingPrice + finalpricePerItem,
        }))
      }
    }
  }

  refillingData = event => {
    event.preventDefault()

    const {
      teaLeaves,
      coffeePowder,
      sugar,
      milk,
      water,
      initialTeaLeaves,
      initialCoffeePowder,
      initialSugar,
      initialMilk,
      initialWater,
    } = this.state

    if (initialTeaLeaves < 500) {
      if (teaLeaves > 500) {
        this.setState({
          initialTeaLeaves: 500,
        })
      } else {
        this.setState(prevState => ({
          initialTeaLeaves:
            parseInt(prevState.initialTeaLeaves, 10) + parseInt(teaLeaves, 10),
        }))
      }
    }

    if (initialCoffeePowder < 500) {
      if (coffeePowder > 500) {
        this.setState({
          initialCoffeePowder: 500,
        })
      } else {
        this.setState(prevState => ({
          initialCoffeePowder:
            parseInt(prevState.initialCoffeePowder, 10) +
            parseInt(coffeePowder, 10),
        }))
      }
    }

    if (initialSugar < 600) {
      if (initialSugar > 600) {
        this.setState({
          initialSugar: 600,
        })
      } else {
        this.setState(prevState => ({
          initialSugar:
            parseInt(prevState.initialSugar, 10) + parseInt(sugar, 10),
        }))
      }
    }

    if (initialMilk < 8000) {
      if (milk > 8000) {
        this.setState({
          initialMilk: 8000,
        })
      } else {
        this.setState(prevState => ({
          initialMilk: parseInt(prevState.initialMilk, 10) + parseInt(milk, 10),
        }))
      }
    }

    if (initialWater < 15000) {
      if (water > 15000) {
        this.setState({
          initialWater: 15000,
        })
      } else {
        this.setState(prevState => ({
          initialWater:
            parseInt(prevState.initialWater, 10) + parseInt(water, 10),
        }))
      }
    }

    // this.setState(prevState => ({
    //   initialTeaLeaves:
    //     parseInt(prevState.initialTeaLeaves, 10) + parseInt(teaLeaves, 10),
    //   initialCoffeePowder:
    //     parseInt(prevState.initialCoffeePowder, 10) +
    //     parseInt(coffeePowder, 10),
    //   initialSugar: parseInt(prevState.initialSugar, 10) + parseInt(sugar, 10),
    //   initialMilk: parseInt(prevState.initialMilk, 10) + parseInt(milk, 10),
    //   initialWater: parseInt(prevState.initialWater, 10) + parseInt(water, 10),
    // }))
  }

  changeOption = event => {
    this.setState({
      selectionOption: event.target.value,
    })
  }

  changeTeaLeaves = event => {
    this.setState({
      teaLeaves: event.target.value,
    })
  }

  changeCoffeePowder = event => {
    this.setState({
      coffeePowder: event.target.value,
    })
  }

  changeSugar = event => {
    this.setState({
      sugar: event.target.value,
    })
  }

  changeMilk = event => {
    this.setState({
      milk: event.target.value,
    })
  }

  changeWater = event => {
    this.setState({
      water: event.target.value,
    })
  }

  onClearData = () => {
    this.setState({
      teaLeaves: '',
      coffeePowder: '',
      sugar: '',
      milk: '',
      water: '',
    })
  }

  addSugar = () => {
    this.setState(prevState => ({
      isSugar: !prevState.isSugar,
    }))
  }

  render() {
    const {
      selectionOption,
      itemQuantity,
      teaLeaves,
      coffeePowder,
      sugar,
      milk,
      water,
      isSugar,
      initialTeaLeaves,
      initialCoffeePowder,
      initialSugar,
      initialMilk,
      initialWater,
      consumedTeaLeaves,
      consumedCoffeePowder,
      consumedSugar,
      consumedMilk,
      consumedWater,
      selledStrongCoffee,
      selledLightCoffee,
      selledStrongTea,
      selledLightTea,
      leakedMilk,
      leakedWater,
      totalPrice,
      sellingPrice,
    } = this.state

    let ans = initialTeaLeaves
    if (ans > 500) {
      ans = 500
    }

    if (ans <= 50) {
      alert('Tea Leaves are below 50Units so please fill  as soon as possible')
    }

    let ans1 = initialCoffeePowder
    if (ans1 > 500) {
      ans1 = 500
    }
    if (ans1 <= 50) {
      alert(
        'Coffee Powder are below 50Units so please fill  as soon as possible',
      )
    }

    let ans2 = initialSugar
    if (ans2 > 600) {
      ans2 = 600
    }
    if (ans2 <= 50) {
      alert('Sugar are below 50Units so please fill  as soon as possible')
    }

    let ans3 = initialMilk
    if (ans3 > 8000) {
      ans3 = 8000
    }
    if (ans3 <= 4000) {
      alert('Milk  are below 4000Units so please fill  as soon as possible')
    }
    let ans4 = initialWater
    if (ans4 > 15000) {
      ans4 = 15000
    }

    if (ans4 <= 600) {
      alert('Water are below 600Units so please fill  as soon as possible')
    }

    return (
      <div className="bg-container">
        <form onSubmit={this.submitForm}>
          <h1>Dispense</h1>
          <div className="container1">
            <label htmlFor="selection">Select Item:</label>
            <select
              id="selection"
              className="select"
              value={selectionOption}
              onChange={this.changeOption}
            >
              {options.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="text">Quantity</label>
            <input
              type="number"
              id="text"
              className="select"
              value={itemQuantity}
              onChange={this.changeQuantity}
            />
            <br />

            <input
              value={isSugar}
              onClick={this.addSugar}
              type="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox">With Sugar</label>
            <div>
              <button type="submit">Dispense</button>
              <button onClick={this.resetMachine} type="button">
                Clear
              </button>
            </div>
          </div>
        </form>

        <div>
          <h1>Stock Refill</h1>
          <form onSubmit={this.refillingData}>
            <label htmlFor="tea-leaves">Tea Leaves Quantity:</label>
            <input
              onChange={this.changeTeaLeaves}
              type="text"
              id="tea-leaves"
              className="input-element"
              value={teaLeaves}
            />
            <br />
            <label htmlFor="coffee-powder">Coffee Powder Quantity:</label>
            <input
              onChange={this.changeCoffeePowder}
              type="text"
              id="coffee-powder"
              className="input-element"
              value={coffeePowder}
            />
            <br />
            <label htmlFor="sugar">Sugar Quantity:</label>
            <input
              onChange={this.changeSugar}
              type="text"
              id="sugar"
              className="input-element"
              value={sugar}
            />
            <br />
            <label htmlFor="milk">Milk Quantity:</label>
            <input
              onChange={this.changeMilk}
              type="text"
              id="milk"
              className="input-element"
              value={milk}
            />
            <br />
            <label htmlFor="water">Water Quantity:</label>
            <input
              onChange={this.changeWater}
              type="text"
              id="water"
              className="input-element"
              value={water}
            />
            <br />
            <div>
              <button type="submit">Refill</button>
              <button onClick={this.onClearData} type="button">
                Clear
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1>Stock Report</h1>
          <div>
            <h3>Stock Consumed</h3>
            <div>
              <p>Tea Leaves:{consumedTeaLeaves}</p>
              <p>Coffee Powder:{consumedCoffeePowder}</p>
              <p>Sugar:{consumedSugar}</p>
              <p>Milk:{consumedMilk}</p>
              <p>Water:{consumedWater}</p>
            </div>
          </div>
          <div>
            <h3>Stock Remaining</h3>
            <div>
              <p>Tea Leaves:{ans}</p>
              <p>Coffee Powder:{ans1}</p>
              <p>Sugar:{ans2}</p>
              <p>Milk:{ans3}</p>
              <p>Water:{ans4}</p>
            </div>
          </div>
          <div>
            <h3>Leakage Information</h3>
            <div>
              <p>Milk:{leakedMilk}</p>
              <p>Water:{leakedWater}</p>
            </div>
          </div>
          <div>
            <h3>Beverage Detail</h3>
            <div>
              <p>Number of Strong Coffee Cups Dispensed:{selledStrongCoffee}</p>
              <p>Number of Light Coffee Cups Dispensed:{selledLightCoffee}</p>
              <p>Number of Strong Tea Cups Dispensed:{selledStrongTea}</p>
              <p>Number of Light Tea Cups Dispensed:{selledLightTea}</p>
              <p>Selling Price:{totalPrice}</p>
              <p>profit:{totalPrice - sellingPrice}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VendingMachine
