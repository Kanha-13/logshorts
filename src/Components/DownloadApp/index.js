import './index.css'
import AppStore from '../../assets/images/appstore.png'
import PlayStore from '../../assets/images/playstore.png'

const DownloadApp = () => {
    return (
        <div id="download-app-div">
            <p>For the best experience use <span>LogIQids</span> app on your smartphone</p>
            <div>
                <img src={AppStore} alt='app-store' />
                <img src={PlayStore} alt='play-store' />
            </div>
        </div>
    )
}

export default DownloadApp;