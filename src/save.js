/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
  
  const { heading, content, align, backgroundColor, borderColor, buttonColor, buttonTextColor, textColor, extLink, linkLabel, hasLinkNofollow } = attributes;

  const blockProps = useBlockProps.save( {
    className: `has-text-align-${ align }`
  } );
  
  return (
    <div 
      { ...blockProps }
      style={ { 
        backgroundColor: backgroundColor,
        color: textColor,
        borderColor: borderColor
      } }
    >
      <div>
        <RichText.Content 
          tagName="h2" 
          value={ heading } 
        />
        <RichText.Content 
          tagName="p" 
          value={ content } 
        />   
        <a 
          { ...blockProps }
          href={ extLink }
          className="button button--volt"
          rel={ hasLinkNofollow ? "nofollow" : "noopener noreferrer" }
          style={ {
            color: buttonTextColor,
            backgroundColor: buttonColor
          } }
        >
          { linkLabel }
        </a>
      </div>
    </div>
  );
}