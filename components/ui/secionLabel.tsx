import { Link } from "lucide-react"

interface SectionLabelProps {
    text: string
    backgroundColor?: string
    textColor?: string
    showBullet?: boolean
    className?: string
    link?: string
}

const SectionLabel = ({
    text,
    textColor = "black",
    showBullet = true,
    className = "",
    link
}: SectionLabelProps) => {
    return (
        <Link
            href={link ? link : "#"}
            className={`inline-flex items-center px-4 py-1 mb-2 bg-[#F8F8F8] rounded-[8px] ${className}`}
            style={{ color: textColor }}
        >
            {showBullet && <span className="mr-2 text-lg">•</span>}
            <span className="font-medium tracking-wide text-xs">{text}</span>
        </Link>
    )
}

export default SectionLabel
