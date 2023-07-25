const TagsList = props => {
  const {itemDetails} = props
  const {name} = itemDetails
  return (
    <div>
      <button type="button">{name}</button>
    </div>
  )
}

export default TagsList
