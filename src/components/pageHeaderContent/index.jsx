
import './styles.scss';

const pageHeaderContent = (props) =>
{
    const {headerText} = props;
    return (
        <div className="wrapper">
            <h2>{headerText}</h2>
        </div>
    )
}

export default pageHeaderContent;