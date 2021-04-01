import {useRef} from 'react';

const FileUploader = ({onFileSelectSuccess}) => {

    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 4096)
            onFileSelectError('File size cannot exceed more than 4MB"');
        else 
            onFileSelectSuccess(file);
      };

}

export default FileUploader;