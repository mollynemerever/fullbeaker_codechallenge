import React, { Component } from "react";
import { Item, Icon, Button, Label } from "semantic-ui-react";

export default class SearchResult extends Component {
  render() {
    return (
      <div>
        <Item>
          <Item.Image src={this.props.img} />
          <Icon name="heart">{this.props.favorites} </Icon>
          <br />
          <Icon name="thumbs up">{this.props.likes} </Icon>
          <br />
          <Label tag>tags: {this.props.tags} </Label>
          <Button> Save </Button>
        </Item>
      </div>
    );
  }
}
