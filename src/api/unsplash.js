import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',

    headers : {
        Authorization : 'Client-ID c6a8e73a21301d8f6cc8239c98729686b868c79b09ca5cd7f6c9b25ebed2dc47'
      }
});