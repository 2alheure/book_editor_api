package models

import (
	"time"
)

type Book struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	Title			string
	Subtitle		string
	Contributors	[]Contributor	`gorm:"many2many:book_contributors"`
	Blocs			[]Bloc			`gorm:"many2many:book_blocs"`
	Version			string
	Readers			[]User			`gorm:"many2many:book_readers"`			// len() to get the number
	DL				[]User			`gorm:"many2many:book_downloads"`		// len() to get the number
	Comments		[]Comment		`gorm:"many2many:book_comments"`		// len() to get the number
	Notes			[]Note			`gorm:"many2many:book_notes"`			// len() to get the number
	CreatedAt		*time.Time		`json:"creationDate,omitempty"`
	UpdatedAt		*time.Time		`json:"updateDate,omitempty"`
}