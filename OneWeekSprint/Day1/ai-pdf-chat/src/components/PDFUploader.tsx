import { UploadFile } from '@/types/file';

interface PDFUploadedrProps {
    file: UploadFile;
}

export default function PDFUploadedr({ file }: PDFUploadedrProps) {
    return (
        <div>
            <h2>Uploaded File</h2>

            <p>Name: {file.name}</p>
            <p>Size: {file.size} bytes</p>
        </div>
    )
}