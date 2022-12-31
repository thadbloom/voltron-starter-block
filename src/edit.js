/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { 
  useBlockProps, 
  RichText, 
  AlignmentControl, 
  BlockControls,
  InspectorControls,
  PanelColorSettings 
} from '@wordpress/block-editor';
import {
  TextControl,
  PanelBody,
  PanelRow,
  ToggleControl,
  ExternalLink
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
  
  const blockProps = useBlockProps();
  const { heading, content, align, backgroundColor, borderColor, textColor, buttonColor, buttonTextColor, extLink, linkLabel, hasLinkNofollow } = attributes;
  
  /**
   * Rich text content event handler
   */
  const onChangeHeading = ( newHeading ) => {
    setAttributes( { heading: newHeading } )
  }

  const onChangeContent = ( newContent ) => {
    setAttributes( { content: newContent } )
  }

  /**
   * Alignment event handler
   */
  const onChangeAlign = ( newAlign ) => {
    setAttributes( { 
      align: newAlign === undefined ? 'none' : newAlign, 
    } )
  }

  /**
   * Color event handlers
   */
  const onChangeBackgroundColor = ( newBackgroundColor ) => {
    setAttributes( { backgroundColor: newBackgroundColor } )
  }

  const onChangeTextColor = ( newTextColor ) => {
    setAttributes( { textColor: newTextColor } )
  }

  const onChangeBorderColor = ( newBorderColor ) => {
    setAttributes( { borderColor: newBorderColor } )
  }

  const onChangeButtonColor = ( newButtonColor ) => {
    setAttributes( { buttonColor: newButtonColor } )
  }

  const onChangeButtonTextColor = ( newButtonTextColor ) => {
    setAttributes( { buttonTextColor: newButtonTextColor } )
  }

  /**
   * External link event handlers
   */
  
  const onChangeextLink = ( newextLink ) => {
    setAttributes( { extLink: newextLink === undefined ? '' : newextLink } )
  }

  const onChangeLinkLabel = ( newLinkLabel ) => {
    setAttributes( { linkLabel: newLinkLabel === undefined ? '' : newLinkLabel } )
  }

  const toggleNofollow = () => {
    setAttributes( { hasLinkNofollow: ! hasLinkNofollow } )
  }

  return (
    <>
      <InspectorControls>
        <PanelColorSettings 
          title={ __( 'Color settings', 'voltron-starter-block' ) }
          initialOpen={ false }
          colorSettings={ [
            {
              value: textColor,
              onChange: onChangeTextColor,
              label: __( 'Text color', 'voltron-starter-block' )
            },
            {
              value: backgroundColor,
              onChange: onChangeBackgroundColor,
              label: __( 'Background color', 'voltron-starter-block' )
            },
            {
              value: borderColor,
              onChange: onChangeBorderColor,
              label: __( 'Border color', 'voltron-starter-block' )
            },
            {
              value: buttonColor,
              onChange: onChangeButtonColor,
              label: __( 'Button color', 'voltron-starter-block' )
            },
            {
              value: buttonTextColor,
              onChange: onChangeButtonTextColor,
              label: __( 'Button text color', 'voltron-starter-block' )
            }
          ] }
        />
        <PanelBody 
            title={ __( 'Link settings' )}
            initialOpen={true}
          >
          <PanelRow>
              <fieldset>
                <TextControl
                  label={__( 'External link', 'voltron-starter-block' )}
                  value={ extLink }
                  onChange={ onChangeextLink }
                  help={ __( 'Add an external link', 'voltron-starter-block' )}
                />
              </fieldset>
            </PanelRow>
            <PanelRow>
              <fieldset>
                <TextControl
                  label={__( 'Link label', 'voltron-starter-block' )}
                  value={ linkLabel }
                  onChange={ onChangeLinkLabel }
                  help={ __( 'Add link label', 'voltron-starter-block' )}
                />
              </fieldset>
            </PanelRow>
            <PanelRow>
              <fieldset>
                <ToggleControl
                  label="Add rel = nofollow"
                  help={
                    hasLinkNofollow
                      ? 'Has rel nofollow.'
                      : 'No rel nofollow.'
                  }
                  checked={ hasLinkNofollow }
                  onChange={ toggleNofollow }
                />
              </fieldset>
            </PanelRow>
        </PanelBody>

      </InspectorControls>

      <BlockControls>
        <AlignmentControl
          value={ { textAlign: align } }
          onChange={ onChangeAlign }
        />
      </BlockControls>

      <div { ...blockProps }
        style={ { 
          // Block, inspector controls
          textAlign: align, 
          backgroundColor: backgroundColor, 
          color: textColor,
          borderColor: borderColor, 
        } } 
      >
        <div>
          <RichText 
            tagName="h2" // the editable HTML element
            onChange={ onChangeHeading } // event handler called when el's content changes
            allowedFormats={ [ 'core/bold', 'core/italic' ] } // an array of allowed formats
            value={ attributes.heading } //  HTML string to make editable
            placeholder={ __( 'Hello. 🤠' ) } // placeholder text
          />
          <RichText 
            tagName="p" // the editable HTML element
            onChange={ onChangeContent } // event handler called when el's content changes
            allowedFormats={ [ 'core/bold', 'core/italic' ] } // an array of allowed formats
            value={ attributes.content } //  HTML string to make editable
            placeholder={ __( 'My name is Billy Blocks.' ) } // placeholder text
          />
          <ExternalLink 
              { ...blockProps }
              href={ extLink }
              className="button button--volt"
              rel={ hasLinkNofollow ? "nofollow" : "" }
              style={ { 
                color: buttonTextColor,
                backgroundColor: buttonColor,
              } }
            >
                { linkLabel }
            </ExternalLink>
        </div>
      </div>

    </>
  );
  
}
