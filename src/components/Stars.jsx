import Star from "./Star"

const Stars = ({count = 0}) => {
    return (
        <ul class="card-body-stars u-clearfix">
            {(6 > count > 0 && typeof(count) === 'number') && [...Array(count)].map((e, i) => <Star key={i}/>)}
        </ul>
    )
}

export default Stars;