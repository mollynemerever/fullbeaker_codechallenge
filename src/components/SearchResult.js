import React, { Component } from "react";
import { Item, Icon, Button, Label } from "semantic-ui-react";

export default class SearchResult extends Component {
  render() {
    let tags = this.props.tags.map((tag, index) => {
      return (
        <div className="tags">
          <Label tag key={index} color="teal">
            {" "}
            {tag}{" "}
          </Label>
        </div>
      );
    });

    return (
      <div>
        <Item className="search-result">
          <Item.Image size="medium" src={this.props.img} />

          <Item.Content className="item-content">
            <Icon name="heart" center="true" color="red">
              {" "}
              {this.props.favorites}{" "}
            </Icon>{" "}
            <Icon name="thumbs up" center="true" color="blue">
              {" "}
              {this.props.likes}{" "}
            </Icon>
            {tags}
            <Button
              onClick={e =>
                this.props.saveImage(e, {
                  id: this.props.id,
                  link: this.props.link
                })
              }
              basic
              color="blue"
            >
              {" "}
              Save{" "}
            </Button>
          </Item.Content>
        </Item>
      </div>
    );
  }
}
