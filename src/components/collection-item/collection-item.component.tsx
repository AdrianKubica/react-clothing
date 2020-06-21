import React from "react"
import "./collection-item.styles.scss"
import { CustomButton } from "../custom-button/custom-button.component"
import { connect, ConnectedProps } from "react-redux"
import { ShopItem } from "../../store/shop/shop.types"
import { addCartItem } from "../../store/cart/cart.actions"

const CollectionItem = ({ item, addCartItem }: { item: ShopItem } & PropsFromRedux) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  )
}

const connector = connect(null, { addCartItem })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(null, { addCartItem })(CollectionItem)
