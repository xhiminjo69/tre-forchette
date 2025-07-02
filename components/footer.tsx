interface FooterProps {
  dict: any
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-max">
        <div className="text-center">
          <div className="text-2xl font-bold font-playfair mb-4">TRE FORCHETTE</div>
          <p className="text-gray-400 mb-4">{dict.footer.made_with}</p>
          <p className="text-gray-500 text-sm">{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
