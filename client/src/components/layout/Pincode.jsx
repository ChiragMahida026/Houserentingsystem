import React from "react";

export default class Pincode extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://api.postalpincode.in/pincode/394210";
    const response = await fetch(url);
    const data = await response.json();
    // this.setState({ person: Array[0] });
    console.log(data.Array);
  }

  // @ts-ignore
  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>person..</div>}
      </div>
    );
  }
}
