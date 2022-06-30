function HeaderItem(props) {
    return (
        <div className="p-5 text-center hover:bg-indigo-700 hover:font-bold">
            {props.name}
        </div>
    )
}

export default HeaderItem;